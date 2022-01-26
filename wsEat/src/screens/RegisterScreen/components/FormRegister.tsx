import * as React from 'react';
import {
  Text,
  Flex,
  VStack,
  FormControl,
  Input,
  Icon,
  Button,
  Circle,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useForm, Controller} from 'react-hook-form';

interface IFormRegister {
  onClick: (data: Inputs) => Promise<void>;
}
export interface Inputs {
  email: string;
  name: string;
  password: string;
  repassword: string;
}
const FormRegister = ({onClick}: IFormRegister) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<Inputs>();
  return (
    <Flex direction="column" bg="white" marginTop="4">
      <Text fontSize="xl" fontWeight="medium" color="black">
        Witaj w stołówce szkolnej
      </Text>
      <VStack space="2" mt="3">
        <FormControl isInvalid={'name' in errors}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <Input
                _focus={{
                  borderBottomColor: 'success.500',
                  borderTopColor: 'success.500',
                  borderLeftColor: 'success.500',
                  borderRightColor: 'success.500',
                }}
                onBlur={onBlur}
                ref={ref}
                placeholder="Imię"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="name"
            rules={{required: 'Field is required'}}
          />
        </FormControl>
        <FormControl isInvalid={'email' in errors}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <Input
                ref={ref}
                _focus={{
                  borderBottomColor: 'success.500',
                  borderTopColor: 'success.500',
                  borderLeftColor: 'success.500',
                  borderRightColor: 'success.500',
                }}
                placeholder="E-mail"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="email"
            rules={{required: 'Field is required'}}
          />
        </FormControl>
        <FormControl isInvalid={'password' in errors}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <Input
                type="password"
                ref={ref}
                _focus={{
                  borderBottomColor: 'success.500',
                  borderTopColor: 'success.500',
                  borderLeftColor: 'success.500',
                  borderRightColor: 'success.500',
                }}
                placeholder="Haslo"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="password"
            rules={{required: 'Field is required'}}
          />

          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={'repassword' in errors}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <Input
                type="password"
                ref={ref}
                _focus={{
                  borderBottomColor: 'success.500',
                  borderTopColor: 'success.500',
                  borderLeftColor: 'success.500',
                  borderRightColor: 'success.500',
                }}
                placeholder="Powtórz hasło"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="repassword"
            rules={{required: 'Field is required'}}
          />

          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
        <Flex flexDirection="row" justifyContent="flex-end">
          <Button variant="unstyled" onPress={handleSubmit(onClick)}>
            <Circle size={10} bg="success.500">
              <Icon as={<MaterialIcons name="east" />} size={5} color="white" />
            </Circle>
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};
export default FormRegister;

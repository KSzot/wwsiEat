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
  View,
} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface Inputs {
  oldPassword: string;
  password: string;
  repassword: string;
}
const PasswordScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<Inputs>();

  const onClick = (data: Inputs) => {
    console.log(data);
  };
  return (
    <View bg="white" padding={4} borderBottomRadius={36}>
      <VStack space="2" mt="3">
        <FormControl isInvalid={'oldPassword' in errors}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <Input
                type="oldPassword"
                ref={ref}
                _focus={{
                  borderBottomColor: 'success.500',
                  borderTopColor: 'success.500',
                  borderLeftColor: 'success.500',
                  borderRightColor: 'success.500',
                }}
                placeholder="Stare Haslo"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="oldPassword"
            rules={{required: 'Field is required'}}
          />

          <FormControl.ErrorMessage>
            {errors.oldPassword?.message}
          </FormControl.ErrorMessage>
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
            {errors.password?.message}
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
            {errors.repassword?.message}
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
    </View>
  );
};

export default PasswordScreen;

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

interface IFormRegister {
  onClick: () => void;
}
const FormRegister = ({onClick}: IFormRegister) => {
  return (
    <Flex direction="column" bg="white" marginTop="4">
      <Text fontSize="xl" fontWeight="medium" color="black">
        Witaj w stołówce szkolnej
      </Text>
      <VStack space="2" mt="3">
        <FormControl isInvalid={false}>
          <Input
            _focus={{
              borderBottomColor: 'success.500',
              borderTopColor: 'success.500',
              borderLeftColor: 'success.500',
              borderRightColor: 'success.500',
            }}
            placeholder="Imię"
          />
        </FormControl>
        <FormControl isInvalid={false}>
          <Input
            _focus={{
              borderBottomColor: 'success.500',
              borderTopColor: 'success.500',
              borderLeftColor: 'success.500',
              borderRightColor: 'success.500',
            }}
            placeholder="E-mail"
          />
        </FormControl>
        <FormControl isInvalid={false}>
          <Input
            type="password"
            _focus={{
              borderBottomColor: 'success.500',
              borderTopColor: 'success.500',
              borderLeftColor: 'success.500',
              borderRightColor: 'success.500',
            }}
            placeholder="Haslo"
          />
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={false}>
          <Input
            type="password"
            _focus={{
              borderBottomColor: 'success.500',
              borderTopColor: 'success.500',
              borderLeftColor: 'success.500',
              borderRightColor: 'success.500',
            }}
            placeholder="Powtórz hasło"
          />
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
        <Flex flexDirection="row" justifyContent="flex-end">
          <Button variant="unstyled" onPress={onClick}>
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
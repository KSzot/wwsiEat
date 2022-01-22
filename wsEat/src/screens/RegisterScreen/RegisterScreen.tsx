import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  useTheme,
  Container,
  Flex,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import {Header, FormRegister} from './components';
import {Platform} from 'react-native';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  return (
    <KeyboardAvoidingView
      flex="1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      bg="primary.50">
      <ScrollView flex="1" bg="primary.50" marginBottom="4">
        <Box
          bg="white"
          borderBottomLeftRadius="xl"
          borderBottomRightRadius="xl"
          paddingX="2"
          paddingY="4">
          <Header navigation={navigation} />
          <FormRegister />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
import {Inputs} from './components/FormRegister';
import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const onHandleSwitchToLoginScreen = () => navigation.navigate('Login');
  const onHandleSubmit = async (data: Inputs) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      await response.user.updateProfile({
        displayName: data.name,
      });
    } catch (error: any) {
      if (error?.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error?.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    }
  };
  return (
    <KeyboardAvoidingView
      flex="1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      bg="lightBlue.50">
      <ScrollView flex="1" bg="lightBlue.50" marginBottom="4">
        <Box
          bg="white"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          paddingX="2"
          paddingY="4">
          <Header onClick={onHandleSwitchToLoginScreen} />
          <FormRegister onClick={onHandleSubmit} />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

import * as React from 'react';
import {Box, KeyboardAvoidingView, ScrollView} from 'native-base';
import {Platform} from 'react-native';
import {Header, FormLogin} from './components';
const LoginScreen = ({navigation}: {navigation: any}) => {
  const onHandleSwitchToRegister = () => navigation.navigate('Register');
  const handleSubmit = () => console.log('Login');
  return (
    <KeyboardAvoidingView
      flex="1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      bg="primary.50">
      <ScrollView flex="1" bg="lightBlue.50" marginBottom="4">
        <Box
          bg="white"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          paddingX="2"
          paddingY="4">
          <Header onClick={onHandleSwitchToRegister} />
          <FormLogin onClick={handleSubmit} />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

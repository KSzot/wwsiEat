import {WelcomeScreen, RegisterScreen, LoginScreen} from '../../screens';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as React from 'react';

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Register"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;

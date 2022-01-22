import {WelcomeScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
    </AuthStack.Navigator>
  );
};

export default Auth;

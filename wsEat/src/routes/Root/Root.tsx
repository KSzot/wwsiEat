import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../Auth/Auth';
import * as React from 'react';

const RootStack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Auth"
          component={Auth}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

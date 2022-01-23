import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../Auth/Auth';
import * as React from 'react';
import Main from '../Main/Main';
import {ShoppingCart, DetailsMeal} from '../../screens';

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
        <RootStack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
        <RootStack.Screen
          options={{
            title: 'Koszyk',
            headerStyle: {
              backgroundColor: '#22c55e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
          name="ShoppingCart"
          component={ShoppingCart}
        />
        <RootStack.Screen
          options={{
            title: 'Szczegóły',
            headerStyle: {
              backgroundColor: '#22c55e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
          name="detailsMeal"
          component={DetailsMeal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

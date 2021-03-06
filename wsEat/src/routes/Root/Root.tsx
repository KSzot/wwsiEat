import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../Auth/Auth';
import * as React from 'react';
import Main from '../Main/Main';
import {
  ShoppingCart,
  DetailsMeal,
  SelectedCategoryScreen,
  PasswordScreen,
} from '../../screens';

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
        <RootStack.Screen
          options={({route}: any) => ({
            title: route?.params?.name ?? 'Tytul',
            headerStyle: {
              backgroundColor: '#22c55e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          })}
          name="selectedCategory"
          component={SelectedCategoryScreen}
        />
        <RootStack.Screen
          options={({route}: any) => ({
            title: 'Zmiana hasła',
            headerStyle: {
              backgroundColor: '#22c55e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          })}
          name="Password"
          component={PasswordScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

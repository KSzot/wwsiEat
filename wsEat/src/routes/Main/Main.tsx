import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  Settings,
  FavouriteMeal,
  ShoppingCart,
  TransactionHistory,
} from '../../screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import * as React from 'react';
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerStyle: {
          backgroundColor: '#22c55e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRightContainerStyle: {paddingRight: 10},
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Icon
              as={<MaterialIcons name="shopping-bag" />}
              size={7}
              color="#fff"
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'storefront';

          if (route.name === 'Home') {
            iconName = 'storefront';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'TransactionHistory') {
            iconName = 'receipt-long';
          } else if (route.name === 'FavouriteMeal') {
            iconName = 'favorite';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#a8a29e',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'WS EAT',
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          title: 'Transakcje',
        }}
      />
      <Tab.Screen
        name="FavouriteMeal"
        component={FavouriteMeal}
        options={{
          title: 'Ulubione',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Ustawienia',
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

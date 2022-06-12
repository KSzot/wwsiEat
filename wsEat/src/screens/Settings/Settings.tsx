import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';
import {SafeAreaView} from 'react-native';
import {MenuOptions, UserProfile} from './components';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
const Settings = ({navigation}: {navigation: any}) => {
  const onHandleLogout = async () => {
    await auth().signOut();
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
            state: {
              routes: [
                {
                  name: 'Login',
                },
              ],
            },
          },
        ],
      }),
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#22c55e" />
      <UserProfile />
      <Box flex={5}>
        <MenuOptions
          iconName="lock-outline"
          title="Hasło"
          clicked={() => navigation.navigate('Password')}
        />
        <MenuOptions
          iconName="logout"
          title="Wyloguj"
          clicked={onHandleLogout}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Settings;

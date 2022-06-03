import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';
import {SafeAreaView} from 'react-native';
import {MenuOptions, UserProfile} from './components';
const Settings = ({navigation}: {navigation: any}) => {
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
          clicked={() => navigation.navigate('Password')}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Settings;

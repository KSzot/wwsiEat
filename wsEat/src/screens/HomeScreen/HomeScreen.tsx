import * as React from 'react';
import {ScrollView, StatusBar, Text, FlatList} from 'native-base';
import {Header, Popular, Sale} from './components';
const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView flex="1" bg="lightBlue.50">
      <StatusBar backgroundColor="#22c55e" />
      <Header navigation={navigation} />
      <Popular navigation={navigation} />
      <Sale navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;

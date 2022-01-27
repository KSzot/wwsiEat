import * as React from 'react';
import {ScrollView, StatusBar, Text, FlatList} from 'native-base';
import {Header, Popular, Sale} from './components';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const currentUser = useSelector((store: RootStore) => store.User);
  console.log(currentUser);
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

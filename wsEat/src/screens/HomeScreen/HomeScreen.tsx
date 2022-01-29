import * as React from 'react';
import {ScrollView, StatusBar, Text, FlatList} from 'native-base';
import {Header, Popular, Sale} from './components';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/actions/userActions/userActions';
const HomeScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(route.params.currentId)
      .onSnapshot(documentSnapshot => {
        dispatch(loginUser(documentSnapshot.data()));
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
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

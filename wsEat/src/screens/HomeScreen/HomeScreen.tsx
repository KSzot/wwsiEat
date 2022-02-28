import * as React from 'react';
import {ScrollView, StatusBar, Text, FlatList, Alert, View} from 'native-base';
import {Header, Popular, Sale, ShowAlert} from './components';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/actions/userActions/userActions';
const HomeScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

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

  React.useEffect(() => {
    const {basket} = route.params;
    if (basket) {
      setShowAlert(true);
    }
  }, [route.params]);
  return (
    <View flex="1" bg="lightBlue.50">
      <StatusBar backgroundColor="#22c55e" />
      <Header navigation={navigation} />
      <Popular navigation={navigation} />
      <Sale navigation={navigation} />
      {showAlert && <ShowAlert />}
    </View>
  );
};

export default HomeScreen;

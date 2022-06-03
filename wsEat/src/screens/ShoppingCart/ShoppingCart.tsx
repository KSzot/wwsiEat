import * as React from 'react';
import {Box, Text, StatusBar, FlatList, Flex, Button} from 'native-base';
import CardItem from './components/CardItem';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {resetBasket} from '../../store/actions/userActions/userActions';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform, TouchableOpacity} from 'react-native';
//import DateTimePicker from "react-native-modal-datetime-picker";

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const basket = useSelector((state: RootStore) => state.User.basket);
  const currentUser = useSelector((store: RootStore) => store.User.user);
  const [isLoading, setISLoading] = React.useState(false);
  const [currentPrize, setCurrentPrize] = React.useState(0);
  const [date, setDate] = React.useState(
    new Date(), // to set default from props or current date
  );

  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  console.log({show});
  const onChange = (event: any, selectedValue: any) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios'); // to show time
    } else {
      const selectedTime = selectedValue || new Date();
      setDate(selectedTime);
      setShow(Platform.OS === 'ios'); // to hide back the picker
      setMode('date'); // defaulting to date for next open
    }
  };
  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const formatDate = (date: any) => {
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    let sum = 0;
    basket.forEach(element => {
      sum += element.prize * element.amount;
    });
    setCurrentPrize(sum);
  }, [basket]);

  const onHandleSubmit = async () => {
    setISLoading(true);
    try {
      const uid = await firestore().collection('Transaction').doc().id;
      const obj = {
        createdAt: new Date().getTime(),
        basket: basket,
        id: uid,
        isRealize: false,
        dateReceipt: date.getTime(),
      };
      const response = await firestore()
        .collection('Transaction')
        .doc(currentUser.id)
        .set(
          {
            transaction: firestore.FieldValue.arrayUnion(obj),
          },
          {merge: true},
        );

      setISLoading(false);
      dispatch(resetBasket());
      navigation.navigate('Home', {
        basket: true,
      });
    } catch (error) {
      setISLoading(false);
      //obsluzyc error
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue.50'}}>
      <StatusBar backgroundColor="#22c55e" />

      {show && (
        <DateTimePicker
          value={date}
          display="default"
          mode={mode as any}
          onChange={onChange}
          style={{width: 320, backgroundColor: 'white', height: 50}}
        />
      )}

      <FlatList
        data={basket}
        numColumns={1}
        ListEmptyComponent={() => (
          <Text textAlign="center">Koszyk jest pusty</Text>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 10,
              backgroundColor: '#f0f9ff',
            }}></View>
        )}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}) => <CardItem item={item} />}
      />
      {basket.length > 0 && (
        <Box style={styles.container}>
          <Flex flexDirection="row" justifyContent="center">
            <Text fontSize="md">Odbiór: </Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Text fontSize="md" fontWeight="semibold">
                {formatDate(date)}
              </Text>
            </TouchableOpacity>
          </Flex>

          <Flex flexDirection="row" justifyContent="center">
            <Text fontSize="md">Do zaplaty: </Text>
            <Text fontSize="md" fontWeight="semibold">
              {currentPrize.toFixed(2)} zl
            </Text>
          </Flex>
          <Button
            marginTop={2}
            size="lg"
            variant="outline"
            borderColor="success.500"
            borderRadius="xl"
            isLoading={isLoading}
            onPress={onHandleSubmit}>
            <Text fontSize="md" color="success.500">
              Plac
            </Text>
          </Button>
        </Box>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white', //gray.100
    padding: 8,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
  },
  calendar: {
    height: 50,

    borderWidth: 1,
    borderColor: '#00000A',
    borderRadius: 2,
    color: '#000',
    paddingLeft: 10,
  },
});

export default ShoppingCart;

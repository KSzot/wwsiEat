import React, {useEffect, useState} from 'react';
import {Box, Text, StatusBar} from 'native-base';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import TransactionItem from './components/TransactionItem';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';

import ModalSlideUp from './components/ModalSlideUp';

interface IDataType {
  basket: Product[];
  createdAt: String;
  id: string;
}

const TransactionHistory = ({navigation}: {navigation: any}) => {
  const currentUser = useSelector((store: RootStore) => store.User.user);
  const [data, setData] = React.useState<IDataType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [qrcode, setQrcode] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firestore()
          .collection('Transaction')
          .doc(currentUser.id)
          .get();
        setData(response?.data()?.transaction as any);
      } catch (error) {
        //wymaga obslugi
      }
    };

    fetchData();
  }, [navigation, isFocused]);

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZoneName: 'long',
  };
  const onHandleOpenModal = (value: string) => {
    setQrcode(value);
    setModalVisible(true);
  };
  const onHandleCloseModal = () => setModalVisible(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue.50'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={data}
        numColumns={1}
        ListEmptyComponent={() => <Text>Empty</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 12,
              backgroundColor: '#f0f9ff',
            }}></View>
        )}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="row"
              marginX={2}
              justifyContent="space-between">
              <Text fontSize={16} fontWeight={'semibold'}>
                {moment(Number(item.createdAt)).format('DD MMM YYYY')}
              </Text>
              <TouchableOpacity onPress={() => onHandleOpenModal(item.id)}>
                <Text fontSize={16} fontWeight={'semibold'}>
                  Qr kod
                </Text>
              </TouchableOpacity>
            </Box>
            <FlatList
              data={item.basket}
              numColumns={1}
              ListEmptyComponent={() => <Text>Empty</Text>}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: '#f0f9ff',
                  }}></View>
              )}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <TransactionItem item={item} />}
            />
          </View>
        )}
      />
      <ModalSlideUp
        clicked={onHandleCloseModal}
        modalVisible={modalVisible}
        qrcode={qrcode}
      />
    </SafeAreaView>
  );
};

export default TransactionHistory;

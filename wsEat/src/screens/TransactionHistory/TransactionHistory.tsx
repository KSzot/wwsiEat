import React, {useEffect, useState} from 'react';
import {Box, Text, StatusBar} from 'native-base';
import {SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const TransactionHistory = ({navigation}: {navigation: any}) => {
  const currentUser = useSelector((store: RootStore) => store.User.user);
  const [data, setData] = React.useState<any[] | undefined>(undefined);
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
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue.50'}}>
      <StatusBar backgroundColor="#22c55e" />
    </SafeAreaView>
  );
};

export default TransactionHistory;

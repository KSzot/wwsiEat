import * as React from 'react';
import {
  Box,
  Text,
  FlatList,
  Flex,
  Icon,
  ScrollView,
  StatusBar,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import {SquareItem} from '../../components';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

const FavouriteMeal = ({navigation}: {navigation: any}) => {
  const currentUser = useSelector((store: RootStore) => store.User.user);

  const onHandleClick = (id: number) => {
    const item = currentUser.favorite.find((el: any) => el.id === id);
    navigation.navigate('detailsMeal', {item: item});
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'lightBlue.50', alignItems: 'center'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={currentUser.favorite}
        numColumns={3}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}: any) => (
          <SquareItem
            name={item.name}
            onClick={onHandleClick}
            imgName={item.imgName}
            id={item.id}
            prize={item.prize}
            isFavorite={true}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FavouriteMeal;

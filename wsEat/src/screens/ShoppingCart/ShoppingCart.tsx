import * as React from 'react';
import {Box, Text, StatusBar, FlatList} from 'native-base';
import CardItem from './components/CardItem';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
const ShoppingCart = ({navigation}: {navigation: any}) => {
  const basket = useSelector((state: RootStore) => state.User.basket);

  console.log(basket);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue.50'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={basket}
        numColumns={1}
        ListEmptyComponent={() => <Text>Empty</Text>}
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
    </SafeAreaView>
  );
};

export default ShoppingCart;

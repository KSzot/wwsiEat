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
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {SquareItem} from '../../components';
import {renderPopular} from '../HomeScreen/mockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const SelectedCategoryScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {itemId, name} = route.params;

  const onHandleClick = (id: number) => {
    const item = renderPopular.find(el => el.id === id);
    navigation.navigate('detailsMeal', {item: item});
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'lightBlue.50', alignItems: 'center'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={renderPopular}
        numColumns={3}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <SquareItem
            name={item.name}
            onClick={onHandleClick}
            imgName={item.imgName}
            id={item.id}
            prize={item.prize}
            isFavorite={item.isFavorite}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SelectedCategoryScreen;

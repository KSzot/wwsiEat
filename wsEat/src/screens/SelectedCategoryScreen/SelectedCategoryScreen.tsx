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
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

const SelectedCategoryScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const currentUser = useSelector((store: RootStore) => store.User.user);

  const {itemId} = route.params;
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firestore()
          .collection('Category')
          .doc(itemId)
          .get();
        setData(response.data()?.breakfast as any);
        console.log(response.data());
      } catch (error) {}
    };
    fetchData();
  }, []);

  const onHandleClick = (id: number) => {
    const item = data.find(el => el.id === id);
    navigation.navigate('detailsMeal', {item: item});
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'lightBlue.50', alignItems: 'center'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <SquareItem
            name={item.name}
            onClick={onHandleClick}
            imgName={item.imgName}
            id={item.id}
            prize={item.prize}
            isFavorite={currentUser.favorite.find(
              (el: any) => el.id === item.id,
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SelectedCategoryScreen;

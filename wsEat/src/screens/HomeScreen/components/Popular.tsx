import * as React from 'react';
import {Box, Text, FlatList, Flex} from 'native-base';
import {SquareItem} from '../../../components';

import firestore from '@react-native-firebase/firestore';

const Popular = ({navigation}: {navigation: any}) => {
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firestore()
          .collection('Category')
          .doc('EVttd7vN46C11dE0e1Bw')
          .get();
        console.log({response});
        setData(response.data()?.popular as any);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const onHandleClick = (id: number) => {
    const item = data.find(el => el.id === id);
    navigation.navigate('detailsMeal', {item: item});
  };
  return (
    <Box marginTop="2">
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="lg">
          {' '}
          Popularne
        </Text>
        {/* <TouchableOpacity>
          <Flex direction="row" alignItems="center" justifyContent="center">
            <Text textAlign="center" color="success.500">
              Zobacz wszystkie
            </Text>
            <Icon
              as={<MaterialIcons name="chevron-right" />}
              size={4}
              color="#22c55e"
            />
          </Flex>
        </TouchableOpacity> */}
      </Flex>
      <FlatList
        horizontal
        data={data}
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
    </Box>
  );
};

export default Popular;

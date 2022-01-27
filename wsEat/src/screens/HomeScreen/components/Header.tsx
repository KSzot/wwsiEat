import * as React from 'react';
import {Box, Text, FlatList, Flex, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {CircleItem} from '../../../components';
import {renderCategoryList} from '../mockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

const Header = ({navigation}: {navigation: any}) => {
  const [data, setData] = React.useState<any[] | undefined>(undefined);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await firestore()
        .collection('Category')
        .doc('All')
        .get();

      setData(response.data()?.allCategory as any);
      console.log(response.data());
    };
    fetchData();
  }, []);
  const onHandleClick = (id: number) =>
    navigation.navigate('selectedCategory', {
      itemId: id,
      name: 'Tu bedzie tytul',
    });
  return (
    <Box marginTop="2">
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="lg">
          {' '}
          Wszystkie kategorie
        </Text>
        <TouchableOpacity>
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
        </TouchableOpacity>
      </Flex>
      {data && (
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <CircleItem
              name={item.name}
              onClick={id => onHandleClick(id)}
              iconName={item.iconName}
              id={item.id}
            />
          )}
        />
      )}
    </Box>
  );
};

export default Header;

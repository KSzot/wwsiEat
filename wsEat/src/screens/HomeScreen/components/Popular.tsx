import * as React from 'react';
import {Box, Text, FlatList, Flex, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {SquareItem} from '../../../components';
import {renderPopular} from '../mockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Popular = ({navigation}: {navigation: any}) => {
  const onHandleClick = (id: number) => {
    const item = renderPopular.find(el => el.id === id);
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
        data={renderPopular}
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

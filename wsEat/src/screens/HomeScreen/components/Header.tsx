import * as React from 'react';
import {Box, Text, FlatList, Flex, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {CircleItem} from '../../../components';
import {renderCategoryList} from '../mockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Header = ({navigation}: {navigation: any}) => {
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
      <FlatList
        horizontal
        data={renderCategoryList}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <CircleItem
            name={item.name}
            onClick={id => {}}
            iconName={item.iconName}
            id={item.id}
          />
        )}
      />
    </Box>
  );
};

export default Header;

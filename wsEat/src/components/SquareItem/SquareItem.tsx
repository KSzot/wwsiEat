import * as React from 'react';
import {Flex, Text, Box, Icon} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface ISquareItem {
  id: number;
  imgName: string;
  isFavorite: boolean;
  name: string;
  onClick: (id: number) => void;
  prize: number;
}

const SquareItem = ({
  id,
  imgName,
  isFavorite,
  name,
  onClick,
  prize,
}: ISquareItem) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="2">
      <TouchableOpacity onPress={() => onClick(id)}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Box style={styles.BoxShadow}>
            <Icon
              as={<MaterialIcons name={imgName} />}
              size={31}
              color="gray.400"
            />
            <Box style={styles.BoxAbsolute}>
              <Icon
                as={
                  <MaterialIcons
                    name={isFavorite ? 'favorite' : 'favorite-border'}
                  />
                }
                size={23}
                color={isFavorite ? 'success.500' : 'gray.400'}
              />
            </Box>
          </Box>
          <Text alignSelf="flex-start">{name}</Text>
          <Text alignSelf="flex-start" fontWeight="semibold">
            {' '}
            {prize} zł
          </Text>
        </Flex>
      </TouchableOpacity>
    </Flex>
  );
};

const styles = StyleSheet.create({
  BoxShadow: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'white',
    elevation: 12,
    shadowColor: '#52525b', //gray.600
    borderRadius: 4,
  },

  BoxAbsolute: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
});

export default SquareItem;

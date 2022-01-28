import * as React from 'react';
import {Flex, Text, Circle, Icon} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ICircleItem {
  id: number;
  circleSize?: number;
  name: string;
  onClick: (id: number, name: string) => void;
  iconName: string;
  iconSize?: number;
}

const CircleItem = ({
  circleSize = 78,
  name,
  onClick,
  id,
  iconName,
  iconSize = 36,
}: ICircleItem) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="2">
      <TouchableOpacity onPress={() => onClick(id, name)}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Circle size={circleSize} bg="white" style={styles.BoxShadow}>
            <Icon
              as={<MaterialIcons name={iconName} />}
              size={iconSize}
              color="gray.400"
            />
          </Circle>
          <Flex direction="row" alignItems="center" justifyContent="center">
            <Text textAlign="center" fontWeight="semibold">
              {name}
            </Text>
            <Icon
              as={<MaterialIcons name="chevron-right" />}
              size={4}
              color="#52525b"
            />
          </Flex>
        </Flex>
      </TouchableOpacity>
    </Flex>
  );
};

const styles = StyleSheet.create({
  BoxShadow: {
    elevation: 12,
    shadowColor: '#52525b', //gray.600
  },
});

export default CircleItem;

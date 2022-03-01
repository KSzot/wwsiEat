import React from 'react';
import {
  ScrollView,
  Text,
  Box,
  Icon,
  Flex,
  Button,
  Alert,
  VStack,
  HStack,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
interface IInformation {
  amount: number;
  name: string;
  prize: number;
}

const Information = ({amount, name, prize}: IInformation) => {
  return (
    <Box style={styles.container}>
      <Flex direction="row" alignItems="center">
        <Flex>
          <Text fontWeight="semibold">{name}</Text>
          <Box display="flex" flexDirection="row">
            <Text>Cena za sztuke: </Text>
            <Text fontWeight="semibold">{prize} zl</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="row" alignItems="center" marginTop="1">
        <Flex direction="row" alignItems="center">
          <Text fontSize={20}>Ilość: </Text>
          <Text
            fontSize={20}
            fontWeight="semibold"
            textAlign="center"
            marginX="1">
            {amount}
          </Text>
        </Flex>
        <Box style={styles.sumBox}>
          <Text textAlign="center" color="success.500">
            Suma: {Number(prize * amount).toFixed(2)}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 8,
  },
  sumBox: {
    display: 'flex',
    marginLeft: 30,
    borderWidth: 1,
    borderColor: '#22c55e',
    padding: 4,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    minWidth: '40%',
  },
});

export default Information;

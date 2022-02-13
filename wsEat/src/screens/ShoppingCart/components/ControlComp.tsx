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
interface IControlComp {
  amount: number;
  name: string;
  prize: number;
  onHandleDeleteProduct: () => void;
  onHandleIncreaseProduct: () => void;
  onHandleDecreaseProduct: () => void;
}

const ControlComp = ({
  amount,
  name,
  prize,
  onHandleDeleteProduct,
  onHandleIncreaseProduct,
  onHandleDecreaseProduct,
}: IControlComp) => {
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
        <Flex marginLeft={50}>
          <TouchableOpacity onPress={onHandleDeleteProduct}>
            <Box
              justifyContent="center"
              alignSelf="center"
              justifyItems="center"
              borderColor="error.500"
              borderWidth="1"
              padding="4"
              rounded="full">
              <Icon as={<Feather name="trash" />} size={5} color="error.500" />
            </Box>
          </TouchableOpacity>
        </Flex>
      </Flex>
      <Flex direction="row" alignItems="center" marginTop="1">
        <Flex direction="row" alignItems="center">
          <Button
            borderColor="black"
            variant="outline"
            onPress={onHandleDecreaseProduct}>
            <Icon as={<MaterialIcons name="remove" />} size={3} color="black" />
          </Button>
          <Text
            fontSize={20}
            fontWeight="semibold"
            textAlign="center"
            marginX="3">
            {amount}
          </Text>
          <Button
            borderColor="black"
            variant="outline"
            onPress={onHandleIncreaseProduct}>
            <Icon as={<MaterialIcons name="add" />} size={3} color="black" />
          </Button>
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

export default ControlComp;

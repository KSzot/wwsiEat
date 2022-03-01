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
import ImageComp from '../../ShoppingCart/components/ImageComp';
import {useSelector} from 'react-redux';
import Information from './Information';
interface ITransactionItem {
  item: Product;
}
const TransactionItem = ({item}: ITransactionItem) => {
  const currentUser = useSelector((store: RootStore) => store.User.user);
  return (
    <Box style={styles.container}>
      <ImageComp
        favorite={currentUser.favorite.find((el: any) => el.id === item.id)}
        imgName={item.imgName}
      />
      <Information amount={item.amount} name={item.name} prize={item.prize} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4f4f5', //gray.100
    padding: 8,
  },
});

export default TransactionItem;

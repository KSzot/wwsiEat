import * as React from 'react';
import {Box, Text, StatusBar, FlatList, Flex, Button} from 'native-base';
import CardItem from './components/CardItem';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {resetBasket} from '../../store/actions/userActions/userActions';

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const basket = useSelector((state: RootStore) => state.User.basket);
  const currentUser = useSelector((store: RootStore) => store.User.user);
  const [isLoading, setISLoading] = React.useState(false);
  const [currentPrize, setCurrentPrize] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let sum = 0;
    basket.forEach(element => {
      sum += element.prize * element.amount;
    });
    setCurrentPrize(sum);
  }, [basket]);

  const onHandleSubmit = async () => {
    setISLoading(true);
    try {
      const uid = await firestore().collection('Transaction').doc().id;
      const obj = {
        createdAt: new Date().getTime(),
        basket: basket,
        id: uid,
      };
      const response = await firestore()
        .collection('Transaction')
        .doc(currentUser.id)
        .set(
          {
            transaction: firestore.FieldValue.arrayUnion(obj),
          },
          {merge: true},
        );

      setISLoading(false);
      dispatch(resetBasket());
      navigation.navigate('Home', {
        basket: true,
      });
    } catch (error) {
      setISLoading(false);
      //obsluzyc error
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue.50'}}>
      <StatusBar backgroundColor="#22c55e" />

      <FlatList
        data={basket}
        numColumns={1}
        ListEmptyComponent={() => <Text>Empty</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 10,
              backgroundColor: '#f0f9ff',
            }}></View>
        )}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}) => <CardItem item={item} />}
      />
      {basket.length > 0 && (
        <Box style={styles.container}>
          <Flex flexDirection="row" justifyContent="center">
            <Text fontSize="md">Do zaplaty: </Text>
            <Text fontSize="md" fontWeight="semibold">
              {currentPrize.toFixed(2)} zl
            </Text>
          </Flex>
          <Button
            marginTop={2}
            size="lg"
            variant="outline"
            borderColor="success.500"
            borderRadius="xl"
            isLoading={isLoading}
            onPress={onHandleSubmit}>
            <Text fontSize="md" color="success.500">
              Plac
            </Text>
          </Button>
        </Box>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white', //gray.100
    padding: 8,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
  },
});

export default ShoppingCart;

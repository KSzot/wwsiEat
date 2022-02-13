import * as React from 'react';
import {Box, Text, StatusBar, FlatList, Flex, Button} from 'native-base';
import CardItem from './components/CardItem';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const basket = useSelector((state: RootStore) => state.User.basket);
  const [currentPrize, setCurrentPrize] = React.useState(0);
  React.useEffect(() => {
    let sum = 0;
    basket.forEach(element => {
      sum += element.prize * element.amount;
    });
    setCurrentPrize(sum);
  }, [basket]);
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
              {currentPrize} zl
            </Text>
          </Flex>
          <Button
            marginTop={2}
            size="lg"
            variant="outline"
            borderColor="success.500"
            borderRadius="xl">
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

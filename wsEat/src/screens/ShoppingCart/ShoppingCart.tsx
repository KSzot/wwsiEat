import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';

const ShoppingCart = ({navigation}: {navigation: any}) => {
  return (
    <Box>
      <StatusBar backgroundColor="#22c55e" />
      <Text> ShoppingCart</Text>
    </Box>
  );
};

export default ShoppingCart;

import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';

const TransactionHistory = ({navigation}: {navigation: any}) => {
  return (
    <Box>
      <StatusBar backgroundColor="#22c55e" />
      <Text> TransactionHistory</Text>
    </Box>
  );
};

export default TransactionHistory;

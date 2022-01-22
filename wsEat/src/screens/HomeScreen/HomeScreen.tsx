import * as React from 'react';
import {Box, StatusBar, Text} from 'native-base';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <Box>
      <StatusBar backgroundColor="#22c55e" />
      <Text> HomeScreen</Text>
    </Box>
  );
};

export default HomeScreen;

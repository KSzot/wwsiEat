import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';

const FavouriteMeal = ({navigation}: {navigation: any}) => {
  return (
    <Box>
      <StatusBar backgroundColor="#22c55e" />
      <Text> FavouriteMeal</Text>
    </Box>
  );
};

export default FavouriteMeal;

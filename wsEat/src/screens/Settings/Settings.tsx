import * as React from 'react';
import {Box, Text, StatusBar} from 'native-base';

const Settings = ({navigation}: {navigation: any}) => {
  return (
    <Box>
      <StatusBar backgroundColor="#22c55e" />
      <Text> Settings</Text>
    </Box>
  );
};

export default Settings;

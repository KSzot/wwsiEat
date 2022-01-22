import * as React from 'react';
import {Text, Flex} from 'native-base';

const Header = ({navigation}: {navigation: any}) => {
  return (
    <Flex
      direction="row"
      bg="white"
      justify="space-between"
      alignItems="center">
      <Text fontSize="md" color="gray.400">
        Zaloguj
      </Text>
      <Text fontSize="md" color="success.500">
        Rejestracja
      </Text>
    </Flex>
  );
};
export default Header;

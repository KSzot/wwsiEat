import * as React from 'react';
import {Text, Flex} from 'native-base';

interface IHeader {
  onClick: () => void;
}

const Header = ({onClick}: IHeader) => {
  return (
    <Flex
      direction="row"
      bg="white"
      justify="space-between"
      alignItems="center">
      <Text fontSize="md" color="success.500">
        Zaloguj
      </Text>
      <Text fontSize="md" color="gray.400" onPress={onClick}>
        Rejestracja
      </Text>
    </Flex>
  );
};
export default Header;

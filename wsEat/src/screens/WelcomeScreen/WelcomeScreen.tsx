import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  useTheme,
  Container,
  Flex,
} from 'native-base';
const WelcomeScreen = () => {
  const {colors} = useTheme();
  return (
    <Box flex="1" bg="primary.50">
      <Center flex="1">
        <Text
          fontSize="6xl"
          color="success.500"
          letterSpacing="md"
          fontWeight="semibold">
          LOGO
        </Text>
      </Center>
      <Box justifyContent="center" flex="2">
        <Text
          textAlign="center"
          fontSize="3xl"
          color="success.500"
          letterSpacing="md"
          marginBottom="6">
          Witaj!
        </Text>
        <Flex justify="center" marginX="10">
          <Button size="lg" bg="success.500" marginBottom="3" borderRadius="xl">
            <Text fontSize="xl" color="white">
              Logowanie
            </Text>
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="success.500"
            borderRadius="xl">
            <Text fontSize="xl" color="success.500">
              Rejestracja
            </Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;

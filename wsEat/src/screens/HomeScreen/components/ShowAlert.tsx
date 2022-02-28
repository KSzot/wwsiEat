import React from 'react';
import {Text, Alert, VStack, HStack} from 'native-base';
const ShowAlert = ({text = 'Zamówienie przyjete'}: {text?: string}) => {
  return (
    <Alert
      w="90%"
      maxW="400"
      status="success"
      variant="solid"
      bottom="0"
      left="0"
      position="absolute"
      zIndex="1000">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack space={2} flexShrink={1}>
          <Alert.Icon mt="1" />
          <Text fontSize="md" color="white">
            {text}
          </Text>
        </HStack>
      </VStack>
    </Alert>
  );
};

export default ShowAlert;

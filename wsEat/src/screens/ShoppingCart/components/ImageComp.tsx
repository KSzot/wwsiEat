import React from 'react';
import {
  ScrollView,
  Text,
  Box,
  Icon,
  Flex,
  Button,
  Alert,
  VStack,
  HStack,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IImageComp {
  favorite: boolean;
  imgName: string;
}

const ImageComp = ({favorite, imgName}: IImageComp) => {
  return (
    <Box style={styles.container}>
      <Icon as={<MaterialIcons name={imgName} />} size={31} color="gray.400" />
      <Box style={styles.BoxImageAbsolute}>
        <Icon
          as={
            <MaterialIcons name={favorite ? 'favorite' : 'favorite-border'} />
          }
          size={4}
          color={favorite ? 'success.500' : 'gray.400'}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    width: 70,
    //height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxImageAbsolute: {
    position: 'absolute',
    bottom: 2,
    right: 4,
  },
});

export default ImageComp;

import * as React from 'react';
import {View, Text, Icon} from 'native-base';
import {Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  return (
    <View
      flex={4}
      bg={'white'}
      borderBottomRadius={32}
      marginBottom={4}
      paddingY={4}
      paddingX={6}>
      <View alignItems={'flex-end'}>
        <Icon as={<MaterialIcons name="edit" />} size={5} color="black" />
      </View>
      <View alignItems={'center'}>
        <Image
          source={require('../../../assets/profileImage.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignItems: 'center',
          }}
        />
      </View>
      <Text textAlign={'center'} fontWeight={700} marginTop={2} fontSize={18}>
        Jan Kowlaski
      </Text>
      <Text
        textAlign={'center'}
        fontWeight={500}
        marginTop={1}
        fontSize={16}
        color="gray.500">
        j.kowalski@wwsi.edu.pl
      </Text>
      <Text
        textAlign={'center'}
        fontWeight={500}
        marginTop={1}
        fontSize={15}
        color="gray.400">
        +48 520 302 142
      </Text>
    </View>
  );
};

export default UserProfile;

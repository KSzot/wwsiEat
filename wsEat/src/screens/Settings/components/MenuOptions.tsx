import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyledProps} from '../../../../node_modules/native-base/lib/typescript/theme/types';
const MenuOptions = ({
  iconName,
  title,
  additionalOptions,
  clicked,
}: {
  iconName: string;
  title: string;
  additionalOptions?: StyledProps;
  clicked: () => void;
}) => {
  return (
    <TouchableOpacity onPress={clicked}>
      <View
        flexDirection={'row'}
        justifyContent="space-between"
        marginX={4}
        bg="transparent"
        paddingY={'4'}
        paddingX={'2'}
        {...additionalOptions}>
        <View flexDirection={'row'} alignItems={'center'}>
          <Icon
            as={<MaterialIcons name={iconName} />}
            size={6}
            color="gray.400"
          />
          <Text fontSize={16} marginLeft={6}>
            {title}
          </Text>
        </View>
        <Icon
          as={<MaterialIcons name="chevron-right" />}
          size={6}
          color="gray.400"
        />
      </View>
    </TouchableOpacity>
  );
};

export default MenuOptions;

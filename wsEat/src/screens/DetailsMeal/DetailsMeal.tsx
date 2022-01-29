import * as React from 'react';
import {ScrollView, Text, Box, Icon, Flex, Button} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

const DetailsMeal = ({route}: {route: any}) => {
  const {item} = route.params;
  const [favorite, setFavorite] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const currentUser = useSelector((store: RootStore) => store.User.user);
  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      setFavorite(currentUser.favorite.find((el: any) => el.id === item.id));
      firstUpdate.current = false;
      return;
    }
    const updateFavoriteMeal = async () => {
      const isFavorite = currentUser.favorite.find(
        (el: any) => el.id === item.id,
      );

      if (favorite === true && !isFavorite) {
        await firestore()
          .collection('Users')
          .doc(currentUser.id)
          .set(
            {
              favorite: firestore.FieldValue.arrayUnion(item),
            },
            {merge: true},
          );
      }
      if (favorite === false && isFavorite) {
        await firestore()
          .collection('Users')
          .doc(currentUser.id)
          .update({
            favorite: firestore.FieldValue.arrayRemove(item),
          });
      }
    };
    updateFavoriteMeal();
  }, [favorite]);
  const increaseCount = () => {
    setCount(prev => prev + 1);
  };
  const decreaseCount = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  return (
    <ScrollView bg="lightBlue.50">
      <Box style={styles.container}>
        <Box style={styles.BoxAbsolute}>
          <Text fontSize={20} fontWeight="semibold" textAlign="center">
            {item.name}
          </Text>
          <Text fontSize={26} fontWeight="semibold" textAlign="center">
            {Number(item.prize * count).toFixed(2)} zł
          </Text>
          <Text fontSize={16} textAlign="center" marginX="2">
            {item.description}
          </Text>

          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            marginTop="5">
            <Button
              borderColor="black"
              variant="outline"
              onPress={decreaseCount}>
              <Icon
                as={<MaterialIcons name="remove" />}
                size={6}
                color="black"
              />
            </Button>
            <Text
              fontSize={20}
              fontWeight="semibold"
              textAlign="center"
              marginX="5">
              {count}
            </Text>
            <Button
              borderColor="black"
              variant="outline"
              onPress={increaseCount}>
              <Icon as={<MaterialIcons name="add" />} size={6} color="black" />
            </Button>
          </Flex>

          <Flex justify="center" marginX="10" marginTop="6">
            <Button
              size="md"
              bg="success.500"
              marginBottom="3"
              borderRadius="xl"
              onPress={() => {}}>
              <Text fontSize="xl" color="white">
                Kup Teraz
              </Text>
            </Button>
            <Button
              size="md"
              variant="outline"
              borderColor="success.500"
              borderRadius="xl"
              onPress={() => {}}>
              <Text fontSize="xl" color="success.500">
                Do koszyka
              </Text>
            </Button>
          </Flex>
        </Box>

        <TouchableOpacity
          style={styles.BoxShadow}
          onPress={() => setFavorite((prev: boolean) => !prev)}>
          <Icon
            as={<MaterialIcons name={item.imgName} />}
            size={70}
            color="gray.400"
          />
          <Box style={styles.BoxImageAbsolute}>
            <Icon
              as={
                <MaterialIcons
                  name={favorite ? 'favorite' : 'favorite-border'}
                />
              }
              size={23}
              color={favorite ? 'success.500' : 'gray.400'}
            />
          </Box>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightBlue.50',
  },
  BoxShadow: {
    position: 'absolute',
    top: 20,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 200,
    backgroundColor: 'white',
    elevation: 14,
    shadowColor: '#52525b', //gray.600
    borderRadius: 4,
  },

  BoxAbsolute: {
    marginTop: 160,
    paddingTop: 70,
    width: '90%',
    height: 400,
    backgroundColor: 'white',
    elevation: 12,
    shadowColor: '#52525b', //gray.600
    borderRadius: 4,
    marginBottom: 20,
  },
  BoxImageAbsolute: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
});

export default DetailsMeal;

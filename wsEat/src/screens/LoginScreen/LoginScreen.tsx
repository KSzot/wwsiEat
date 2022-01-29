import * as React from 'react';
import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  HStack,
  Spinner,
  Alert,
  VStack,
  Text,
} from 'native-base';
import {Platform} from 'react-native';
import {Header, FormLogin} from './components';
import auth from '@react-native-firebase/auth';
import {Inputs} from './components/FormLogin';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/actions/userActions/userActions';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showWarning, setShowWarning] = React.useState(false);
  const [warningText, setWarningText] = React.useState('');
  const dispatch = useDispatch();
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showWarning) {
      timer = setTimeout(() => {
        setShowWarning(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showWarning]);

  const onHandleSwitchToRegister = () => navigation.navigate('Register');
  const handleSubmit = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const response = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      const response2 = await firestore()
        .collection('Users')
        .doc(response.user.uid)
        .get();
      dispatch(loginUser(response2.data()));

      setIsLoading(false);
      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Main',
              state: {
                routes: [
                  {
                    name: 'Home',
                    params: {currentId: response.user.uid},
                  },
                ],
              },
            },
          ],
        }),
      });
    } catch (error: any) {
      setIsLoading(false);

      if (error?.code === 'auth/wrong-password') {
        setShowWarning(true);
        setWarningText('Podano zle haslo');
      }
      if (error?.code === 'auth/user-not-found') {
        setShowWarning(true);
        setWarningText('Podany uzytkownik nie istnieje');
      }
      if (error?.code === 'auth/invalid-email') {
        setShowWarning(true);
        setWarningText('Niepoprawny e-mail');
      }
    }
  };
  return (
    <KeyboardAvoidingView
      flex="1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      bg="lightBlue.50">
      <ScrollView flex="1" bg="lightBlue.50" marginBottom="4">
        <Box
          bg="white"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          paddingX="2"
          paddingY="4"
          position="relative">
          <Header onClick={onHandleSwitchToRegister} />
          <FormLogin onClick={handleSubmit} />
          {isLoading && (
            <HStack
              left={0}
              top={0}
              bottom={0}
              right={0}
              justifyContent="center"
              position="absolute">
              <Spinner size="lg" color="success.500" />
            </HStack>
          )}
        </Box>
      </ScrollView>
      {showWarning && (
        <Alert
          w="90%"
          maxW="400"
          status="warning"
          colorScheme="warning"
          position="relative"
          bottom="10">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {warningText}
              </Text>
            </HStack>
          </VStack>
        </Alert>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

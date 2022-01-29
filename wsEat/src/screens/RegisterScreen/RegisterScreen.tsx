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
  Spinner,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'native-base';
import {Header, FormRegister} from './components';
import {Inputs} from './components/FormRegister';
import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showWarning, setShowWarning] = React.useState(false);
  const [warningText, setWarningText] = React.useState('');

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showWarning) {
      timer = setTimeout(() => {
        setShowWarning(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showWarning]);

  const onHandleSwitchToLoginScreen = () => navigation.navigate('Login');
  const onHandleSubmit = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const response = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      await response.user.updateProfile({
        displayName: data.name,
      });
      await firestore()
        .collection('Users')
        .doc(response.user.uid)
        .set({
          id: response.user.uid,
          name: data.name,
          email: data.email,
          favorite: [],
        });
      setIsLoading(false);
      onHandleSwitchToLoginScreen();
    } catch (error: any) {
      setIsLoading(false);
      if (error?.code === 'auth/email-already-in-use') {
        setWarningText('Ten e-mail jest juz w uzyciu');
        setShowWarning(true);
      }

      if (error?.code === 'auth/invalid-email') {
        setWarningText('Ten e-mail jest niepoprawny');
        setShowWarning(true);
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
          <Header onClick={onHandleSwitchToLoginScreen} />
          <FormRegister onClick={onHandleSubmit} />
          {isLoading && (
            <HStack
              top={0}
              bottom={0}
              left={0}
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

export default RegisterScreen;

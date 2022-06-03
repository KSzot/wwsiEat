import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import {Text, Button} from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';
interface IModalSlideUp {
  clicked: () => void;
  qrcode: string;
  modalVisible: boolean;
  date: number;
}
const ModalSlideUp = ({clicked, qrcode, modalVisible, date}: IModalSlideUp) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text fontWeight="semibold" fontSize={18} marginTop={10}>
              Data odbioru:
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={20}
              marginLeft={1}
              marginTop={10}>
              {moment(date).format('DD MMM YYYY, HH:mm')}
            </Text>
          </View>
          <Text marginBottom={4} fontWeight="semibold" fontSize={20}>
            Twoj numer
          </Text>
          <QRCode value={qrcode} size={260} />
          <View style={{width: '100%', paddingHorizontal: 20, marginTop: 12}}>
            <Button
              size="lg"
              bg="success.500"
              marginBottom="3"
              borderRadius="xl"
              onPress={clicked}>
              <Text fontSize="xl" color="white">
                Zamknij
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  modalView: {
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalSlideUp;

import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Modal from 'react-native-modal';

import LogList from '../components/LogList';
import StorageService from '../../services/StorageService';

const LogContainer = () => {
  const [isModalShown, setModalShown] = useState(false);
  const [logData, setLogData] = useState([]);

  const showModal = async () => {
    setLogData(await StorageService.getData());
    setModalShown(true);
  };

  return (
    <>
      <Modal isVisible={isModalShown}>
        <LogList listValues={logData} hideModal={() => setModalShown(false)} />
      </Modal>
      <View style={styles.button}>
        <Button onPress={showModal} title={'Show log'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});

export default LogContainer;

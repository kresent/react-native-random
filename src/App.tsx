import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {appStore} from '..';
import NumbersConnector from './views/connectors/NumbersConnector';
import Log from './views/containers/LogContainer';

const App = () => {
  return (
    <Provider store={appStore}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <NumbersConnector />
        <Log />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default App;

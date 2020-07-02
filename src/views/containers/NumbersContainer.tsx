import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import * as numberActions from '../../stores/actions';
import NumberCell from '../components/NumberCell';
import {TNumbersList} from '../../stores/models/numbers';

type TProps = (props: {
  numbers: TNumbersList;
  actions: typeof numberActions;
}) => JSX.Element;

const NumbersContainer: TProps = ({numbers, actions}) => {
  const [first, second, third] = numbers;
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberWrapper}>
        <NumberCell cellValue={first} />
        <NumberCell cellValue={second} />
        <NumberCell cellValue={third} />
      </View>

      <View style={styles.button}>
        <Button onPress={actions.generateNewNumbers} title={'Generate!'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '40%',
  },
  numberWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 20,
  },
});

export default NumbersContainer;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../theme/colors';

type TProps = (props: {cellValue: number}) => JSX.Element;

const NumberCell: TProps = props => {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{props.cellValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.main,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default NumberCell;

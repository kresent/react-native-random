import React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {COLORS} from '../../theme/colors';
import {TNumberSet} from '../../stores/models/numbers';
import NumberCell from './NumberCell';

type TProps = (props: {
  listValues: TNumberSet[];
  hideModal: () => void;
}) => JSX.Element;

const LogList: TProps = props => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={props.listValues}
        renderItem={({item}: {item: TNumberSet}) => <Row rowData={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.button}>
        <Button onPress={props.hideModal} title={'Close window'} />
      </View>
    </View>
  );
};

type TRowProps = (props: {rowData: TNumberSet}) => JSX.Element;
const Row: TRowProps = ({rowData}) => {
  const [first, second, third] = rowData.value;

  return (
    <View style={styles.row}>
      <NumberCell cellValue={first} />
      <NumberCell cellValue={second} />
      <NumberCell cellValue={third} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
    backgroundColor: COLORS.background,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderBottomColor: COLORS.main,
    borderBottomWidth: 1,
    padding: 5,
  },
  button: {
    marginTop: 40,
  },
});

export default LogList;

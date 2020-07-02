import {createSelector} from 'reselect';
import {TRootStore} from '../reducers';

const getCurrentNumbers = (state: TRootStore) =>
  state.numbers.currentNumbers.value;

export const getNumbersToDisplay = createSelector(
  [getCurrentNumbers],
  numbers => numbers,
);

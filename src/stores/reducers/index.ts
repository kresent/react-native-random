import {combineReducers} from 'redux';
import numbers, {TNumbersReducerState} from './numbers';

export type TRootStore = {
  numbers: TNumbersReducerState;
};

const rootReducer = combineReducers({
  numbers,
});

export default rootReducer;

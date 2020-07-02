import {GENERATE_NUMBERS} from '../constants/actionTypes';

import {TNumberSet, generateNumberSet} from '../models/numbers';

export type TNumbersReducerState = {
  currentNumbers: TNumberSet;
};

const initialState: TNumbersReducerState = {
  currentNumbers: {
    value: [0, 0, 0],
    id: 'empty',
  },
};

export default function numbers(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBERS:
      return {
        ...state,
        currentNumbers: generateNumberSet(),
      };

    default:
      return state;
  }
}

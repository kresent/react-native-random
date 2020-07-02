import numbers from './numbers';
import {GENERATE_NUMBERS} from '../constants/ActionTypes';

describe('numbers reducer', () => {
  it('should handle initial state', () => {
    expect(numbers(undefined, {})).toEqual({
      currentNumbers: {
        value: [0, 0, 0],
        id: 'empty',
      },
    });
  });

  it('should handle ADD_TODO', () => {
    expect(
      numbers(undefined, {
        type: GENERATE_NUMBERS,
      }),
    ).not.toEqual({
      currentNumbers: {
        value: [0, 0, 0],
        id: 'empty',
      },
    });
  });
});

import {
  generateRandomNumber,
  generateRandomString,
} from '../../utils/randomGenerators';
import StorageService from '../../services/StorageService';

export type TNumbersList = [number, number, number];

export type TNumberSet = {
  value: TNumbersList;
  id: string;
};

export const generateNumberSet: () => TNumberSet = () => {
  const numberSet = [
    generateRandomNumber(),
    generateRandomNumber(),
    generateRandomNumber(),
  ] as TNumbersList;

  const id = generateRandomString();

  const createdSet = {
    value: numberSet,
    id,
  };
  StorageService.storeData([createdSet]);

  return createdSet;
};

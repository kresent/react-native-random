import {TNumberSet} from '../stores/models/numbers';

class StorageService {
  private savedState: TNumberSet[] = [];
  storeData = async value => {
    this.savedState = this.savedState.concat(value);
  };

  getData = async () => {
    return this.savedState.slice();
  };
}

export default new StorageService();

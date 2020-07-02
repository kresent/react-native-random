import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import reducer from './src/stores/reducers';
import {createStore} from 'redux';

export const appStore = createStore(reducer);

AppRegistry.registerComponent(appName, () => App);

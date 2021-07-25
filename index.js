/**
 * @format
 */

import {AppRegistry}     from 'react-native';
import App               from './App';
import ApiService        from "./src/services/api.service.js";
import {name as appName} from './app.json';
import Icon from 'react-native-vector-icons/FontAwesome';
//services
ApiService.init();

AppRegistry.registerComponent(appName, () => App);

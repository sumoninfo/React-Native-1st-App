/**
 * @format
 */

import {AppRegistry}     from 'react-native';
import App               from './App';
import ApiService        from "./src/services/api.service.js";
import {name as appName} from './app.json';
//services
ApiService.init();

AppRegistry.registerComponent(appName, () => App);

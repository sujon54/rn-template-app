/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation';

function App() {

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <AppNavigator />
    </Provider>
  );
}

export default App;

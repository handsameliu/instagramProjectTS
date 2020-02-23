/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ReduxStore} from 'reduxState/store';
import RootScreen from 'routers/RootScreen';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <RootScreen />
    </Provider>
  );
};

// const styles = StyleSheet.create({});

export default App;

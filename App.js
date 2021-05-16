/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navscreen from './src/Navscreen';
import Homepage from './src/Homepage';
import { enableScreens } from 'react-native-screens';
export class App extends Component {
  render() {
    //enableScreens();
    return (
      //<Homepage/>
      <Navscreen/>
    )
  }
}

export default App


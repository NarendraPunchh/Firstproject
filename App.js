/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


import Regform from "./App/Components/regform"

export default class App extends Component{
  
  render(){
  return (
    
       <View> 
        
     
  <Regform/>
  
  </View>
  );
}
}


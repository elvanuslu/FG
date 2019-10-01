import React, { Component } from 'react';
import { View } from 'react-native';
import FalGuru from './src';
 
class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <View style={{flex:1}}>
            <FalGuru/>
        </View>
    );
  }
}

export default App;

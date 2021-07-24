import React, { Component }  from "react";
import { Image, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 10 }}>
        <View style={{ backgroundColor: "red", flex: 4 }}></View>
        <View style={{ backgroundColor: "blue", flex: 2 }}></View>
        <View style={{ backgroundColor: "green", flex: 3 }}></View>
      </View>
    );
  }
}

export default App;

import React, { Component }  from "react";
import { Image, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white"}}>
        <View style={{ backgroundColor: "red", height:50, width:100 }}></View>
        <View style={{ backgroundColor: "blue", height:50, width:200 }}></View>
        <View style={{ backgroundColor: "green", height:50, width:300 }}></View>
      </View>
    );
  }
}

export default App;

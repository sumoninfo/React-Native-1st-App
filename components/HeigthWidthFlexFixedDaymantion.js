import React, { Component } from "react";
import { View }             from "react-native";

class HeightWidthFlexFixedDaymantion extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 10 }}>
        <View style={{ backgroundColor: "red", flex: 4 }}></View>
        <View style={{ backgroundColor: "blue", flex: 2 }}></View>
        <View style={{ backgroundColor: "green", flex: 3 }}></View>

        <View style={{ backgroundColor: "red", height: 50, width: 100 }}></View>
        <View style={{ backgroundColor: "blue", height: 50, width: 200 }}></View>
        <View style={{ backgroundColor: "green", height: 50, width: 300 }}></View>
        <View style={{ backgroundColor: "red", height: 50, width: 395 }}></View>
        <View style={{ backgroundColor: "red", height: 50, width: 395 }}></View>

      </View>
    );
  }
}

export default HeigthWidthFlexFixedDaymantion;

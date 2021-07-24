import React, { Component }                   from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";

class FlatListComponent extends Component {
  JsonData = [
    {
      title   : "Bangladesh",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "USA",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "India",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Canada",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "UK",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Japan",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Uganda",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Nepal",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Arabia",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Bhutan",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "French",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Italy",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "London",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Dhaka",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
  ];

  onPress = (alertTitle) => {
    Alert.alert(alertTitle);
  };

  ChildView = ({ ChildTitle, ChildSubTitle, img }) => {
    return (
      <View style={{ flexDirection: "row", backgroundColor: "white", padding: 5, flex: 100 }}>
        <View style={{ flex: 30 }}>
          <Image style={{ height: 70, width: "100%" }} source={{ uri: img }} />
        </View>
        <View style={{ flex: 70, padding: 10 }}>
          <Text onPress={() => this.onPress(ChildTitle)}
                style={{ color: "black", fontSize: 18 }}>{ChildTitle}</Text>
          <Text style={{ color: "blue", fontSize: 12 }}>{ChildSubTitle}</Text>
        </View>
      </View>
    );
  };


  render() {
    return (
      <FlatList data={this.JsonData}
                renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subTitle}
                                                          img={item.img} />} />
    );
  }
}

export default FlatListComponent;

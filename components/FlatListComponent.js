import React, { Component }     from "react";
import { FlatList, Text, View } from "react-native";

class App extends Component {
  JsonData = [
    { title: "Bangladesh", subTitle: "This is my country name, here something" },
    { title: "USA", subTitle: "This is my country name, here something" },
    { title: "India", subTitle: "This is my country name, here something" },
    { title: "Canada", subTitle: "This is my country name, here something" },
    { title: "UK", subTitle: "This is my country name, here something" },
    { title: "Japan", subTitle: "This is my country name, here something" },
    { title: "Uganda", subTitle: "This is my country name, here something" },
    { title: "Nepal", subTitle: "This is my country name, here something" },
    { title: "Arabia", subTitle: "This is my country name, here something" },
    { title: "Bhutan", subTitle: "This is my country name, here something" },
    { title: "French", subTitle: "This is my country name, here something" },
    { title: "Italy", subTitle: "This is my country name, here something" },
    { title: "London", subTitle: "This is my country name, here something" },
    { title: "Dhaka", subTitle: "This is my country name, here something" },
    { title: "New York", subTitle: "This is my country name, here something" },

    { title: "Bangladesh", subTitle: "This is my country name, here something" },
    { title: "USA", subTitle: "This is my country name, here something" },
    { title: "India", subTitle: "This is my country name, here something" },
    { title: "Canada", subTitle: "This is my country name, here something" },
    { title: "UK", subTitle: "This is my country name, here something" },
    { title: "Japan", subTitle: "This is my country name, here something" },
    { title: "Uganda", subTitle: "This is my country name, here something" },
    { title: "Nepal", subTitle: "This is my country name, here something" },
    { title: "Arabia", subTitle: "This is my country name, here something" },
    { title: "Bhutan", subTitle: "This is my country name, here something" },
    { title: "French", subTitle: "This is my country name, here something" },
    { title: "Italy", subTitle: "This is my country name, here something" },
    { title: "London", subTitle: "This is my country name, here something" },
    { title: "Dhaka", subTitle: "This is my country name, here something" },
    { title: "New York", subTitle: "This is my country name, here something" },

    { title: "Bangladesh", subTitle: "This is my country name, here something" },
    { title: "USA", subTitle: "This is my country name, here something" },
    { title: "India", subTitle: "This is my country name, here something" },
    { title: "Canada", subTitle: "This is my country name, here something" },
    { title: "UK", subTitle: "This is my country name, here something" },
    { title: "Japan", subTitle: "This is my country name, here something" },
    { title: "Uganda", subTitle: "This is my country name, here something" },
    { title: "Nepal", subTitle: "This is my country name, here something" },
    { title: "Arabia", subTitle: "This is my country name, here something" },
    { title: "Bhutan", subTitle: "This is my country name, here something" },
    { title: "French", subTitle: "This is my country name, here something" },
    { title: "Italy", subTitle: "This is my country name, here something" },
    { title: "London", subTitle: "This is my country name, here something" },
    { title: "Dhaka", subTitle: "This is my country name, here something" },
    { title: "New York", subTitle: "This is my country name, here something" },
  ];

  ChildView = ({ ChildTitle, ChildSubTitle }) => {
    return (
      <View style={{ backgroundColor: "white", padding: 10, margin: 5 }}>
        <Text style={{ color: "black", fontSize: 18 }}>{ChildTitle}</Text>
        <Text style={{ color: "blue", fontSize: 12 }}>{ChildSubTitle}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList data={this.JsonData}
                renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subTitle} />} />
    );
  }
}

export default App;

import React, { Component }                   from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";

class FlatListComponent extends Component {
  JsonData = [
    {
      title   : "Bangladesh",
      img     : "https://cdn.pixabay.com/photo/2021/07/19/06/29/kangaroo-6477341_960_720.jpg",
      subTitle: "11 This is my country name, here something. This is my country name, here something",
    },
    {
      title   : "USA",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something. This is my country name, here something. ",
    },
    {
      title   : "India",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-on-white-picture-id641171366?k=6&m=641171366&s=612x612&w=0&h=Dr-yqtO_fni7LLb363ahiWXEjuu2uU_C0RDcnxbyNq0=",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Canada",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-in-grasslands-in-the-australian-outback-picture-id595153368?k=6&m=595153368&s=612x612&w=0&h=7UO5qBzVyN8lGTugLW2ATyNzkCeDVWmy0Zi0mQl6xWk=",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "UK",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Japan",
      img     : "https://media.istockphoto.com/photos/kangaroo-in-the-wild-picture-id659111780?k=6&m=659111780&s=612x612&w=0&h=6_hcumSsQEWKRWoszR1Fj8tb5hLcQVqRsOFD69x5U18=",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Uganda",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Nepal",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-macropus-rufus-australia-group-running-picture-id1253825174?k=6&m=1253825174&s=612x612&w=0&h=gbu1rtRGz4HA8gb_9JupcZWGozR7HYXnFQY8RqUMsqs=",
      subTitle: "This is my country name, here something",
    },
    {
      title   : "Arabia",
      img     : "https://media.istockphoto.com/photos/jumping-kangaroo-picture-id171137874?k=6&m=171137874&s=612x612&w=0&h=SkH94dXmwuTejXMPmEsbBH7Y4cy40JHMfq3YhtVNg5E=",
      subTitle: "This is my country name, here something. This is my country name, here something. ",
    },
    {
      title   : "Bhutan",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something. This is my country name, here something",
    },
    {
      title   : "French",
      img     : "https://media.istockphoto.com/photos/kangaroo-at-open-field-picture-id508549040?k=6&m=508549040&s=612x612&w=0&h=Yp158QL_JigpQDpkdlFlNyrMbHWi3_uYx1l_L6J9I1M=",
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
      subTitle: "This is my country name, here something. This is my country name, here something",
    },
    {
      title   : "Dhaka",
      img     : "https://media.istockphoto.com/photos/my-favorite-color-is-sunset-picture-id900086952?k=6&m=900086952&s=612x612&w=0&h=lZg2C8eoBfRDLHcd5sSWeF46D-TrMohGEfYWR_v6EhQ=",
      subTitle: "This is my country name, here something. This is my country name, here something",
    },
  ];

  onPress = (alertTitle) => {
    Alert.alert(alertTitle);
  };

  ChildView = ({ ChildTitle, ChildSubTitle, img }) => {
    return (
      <View style={{ flexDirection: "column", width:200, height:200, backgroundColor: "red", margin: 5}}>
        <View>
          <Image style={{ height: 100, width: "100%" }} source={{ uri: img }} />
        </View>
        <View style={{padding: 10 }}>
          <Text onPress={() => this.onPress(ChildTitle)}
                style={{ color: "black", fontSize: 18 }}>{ChildTitle} 111</Text>
          <Text style={{ color: "blue", fontSize: 12 }}>{ChildSubTitle}</Text>
        </View>
      </View>
    );
  };


  render() {
    return (
      <FlatList horizontal={true} data={this.JsonData}
                renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subTitle}
                                                          img={item.img} />} />
    );
  }
}

export default FlatListComponent;

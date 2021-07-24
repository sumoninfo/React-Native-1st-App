import React, { Component }                   from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";

class FlatListComponent extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall  = async () => {
    let resp     = await fetch("https://reactnative.dev/movies.json");
    let respJson = await resp.json();
    this.setState({ data: respJson.movies });
  };
  JsonData = [
    {
      id      : 1,
      title   : "Bangladesh",
      img     : "https://cdn.pixabay.com/photo/2021/07/19/06/29/kangaroo-6477341_960_720.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 2,
      title   : "USA",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something. ",
    },
    {
      id      : 3,
      title   : "India",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-on-white-picture-id641171366?k=6&m=641171366&s=612x612&w=0&h=Dr-yqtO_fni7LLb363ahiWXEjuu2uU_C0RDcnxbyNq0=",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 4,
      title   : "Canada",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-in-grasslands-in-the-australian-outback-picture-id595153368?k=6&m=595153368&s=612x612&w=0&h=7UO5qBzVyN8lGTugLW2ATyNzkCeDVWmy0Zi0mQl6xWk=",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 5,
      title   : "UK",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 6,
      title   : "Japan",
      img     : "https://media.istockphoto.com/photos/kangaroo-in-the-wild-picture-id659111780?k=6&m=659111780&s=612x612&w=0&h=6_hcumSsQEWKRWoszR1Fj8tb5hLcQVqRsOFD69x5U18=",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 7,
      title   : "Uganda",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 8,
      title   : "Nepal",
      img     : "https://media.istockphoto.com/photos/red-kangaroo-macropus-rufus-australia-group-running-picture-id1253825174?k=6&m=1253825174&s=612x612&w=0&h=gbu1rtRGz4HA8gb_9JupcZWGozR7HYXnFQY8RqUMsqs=",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 8,
      title   : "Arabia",
      img     : "https://media.istockphoto.com/photos/jumping-kangaroo-picture-id171137874?k=6&m=171137874&s=612x612&w=0&h=SkH94dXmwuTejXMPmEsbBH7Y4cy40JHMfq3YhtVNg5E=",
      subTitle: "This is my country name, here something. This is my country name, here something. ",
    },
    {
      id      : 9,
      title   : "Bhutan",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something. This is my country name, here something",
    },
    {
      id      : 10,
      title   : "French",
      img     : "https://media.istockphoto.com/photos/kangaroo-at-open-field-picture-id508549040?k=6&m=508549040&s=612x612&w=0&h=Yp158QL_JigpQDpkdlFlNyrMbHWi3_uYx1l_L6J9I1M=",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 11,
      title   : "Italy",
      img     : "https://image.shutterstock.com/image-photo/flag-japan-waving-wind-against-600w-1118187146.jpg",
      subTitle: "This is my country name, here something",
    },
    {
      id      : 12,
      title   : "London",
      img     : "https://image.shutterstock.com/image-vector/original-simple-bangladesh-flag-isolated-600w-159935018.jpg",
      subTitle: "This is my country name, here something. This is my country name, here something",
    },
    {
      id      : 13,
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
      <View style={{ flexDirection: "column", width: 185, height: 200, backgroundColor: "white", margin: 5 }}>
        <View>
          <Image style={{ height: 100, width: "100%" }} source={{ uri: img }} />
        </View>
        <View style={{ padding: 10 }}>
          <Text onPress={() => this.onPress(ChildTitle)} style={{ color: "black", fontSize: 18 }}>{ChildTitle}</Text>
          <Text style={{ color: "blue", fontSize: 12 }}>{ChildSubTitle}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      /*<FlatList keyExtractor={item => item.id} numColumns={2} horizontal={false} data={this.JsonData}
                renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subTitle}
                                                          img={item.img} />} />*/
      <FlatList data={this.state.data} renderItem={({ item }) =>
        <Text style={{fontSize:40, backgroundColor:'skyblue', margin:15}}>{item.title}</Text>} />
    );
  }
}

export default FlatListComponent;

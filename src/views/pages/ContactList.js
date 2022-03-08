import React, { Component }                                 from "react";
import { StatusBar, StyleSheet, Text, View }      from "react-native";
import { Body, Button, CardItem, Container, Content, Item } from "native-base";
import { PermissionsAndroid }                               from "react-native";
import Contacts                                             from "react-native-contacts";


export default class ContactList extends Component {
  state = {
    contacts: null,
  };

  getContacts() {
    if (Platform.OS === "ios") {
      console.log(Platform.OS, "ios");
      Contacts.getAll((err, contact) => {
        if (err) {
          throw err;
        }
        this.setState({ contacts });
      });
    } else if (Platform.OS === "android") {
      console.log(Platform.OS, "android");
      PermissionsAndroid.request(console.log(Platform.OS, "PermissionsAndroid"), PermissionsAndroid.PERMISSIONS.READ_CONTACTS, console.log(Platform.OS, "READ_CONTACTS"), {
        "title": "Contacts", "message": "This app would like to view your contacts.",
      }).then(() => {
        console.log(Platform.OS, "then");
        Contacts.getAll((err, contacts) => {
          if (err === "denied") {
            console.log(err, "err");
          }
          this.setState({ contacts });
        });
      });
    }
  }


  render() {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", title: "First Item",
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", title: "Second Item",
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72", title: "Third Item",
      },
    ];

    const Item       = ({ title }) => (<View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>);
    const renderItem = ({ item }) => (<Item title={item.title} />);

    return (<>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content>
          <CardItem header>
            <Text style={styles.heading}>Contact List</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Button primary block onPress={() => this.getContacts()}>
                <Text style={styles.btn}>All Contacts</Text>
              </Button>
            </Body>
          </CardItem>
          <CardItem>
            {/*<FlatList*/}
            {/*  data={DATA}*/}
            {/*  renderItem={renderItem}*/}
            {/*  keyExtractor={item => item.id}*/}
            {/*/>*/}
            {/*<FlatList*/}
            {/*  data={this.state.contacts}*/}
            {/*  renderItem={({ item }) => (<View style={styles.item}>*/}
            {/*    <Text style={styles.title}>{item.givenName} {item.familyName}</Text>*/}
            {/*    {item.phoneNumbers.map(phone => (<Text>{phone.number}</Text>))}*/}
            {/*  </View>)}*/}
            {/*  numColumns={1}*/}
            {/*  keyExtractor={(item, index) => index}*/}
            {/*  scrollEnabled={false}*/}
            {/*/>*/}
          </CardItem>
        </Content>
      </Container>
    </>);
  }
};
const styles = StyleSheet.create({
  container : {
    flex: 1, marginTop: StatusBar.currentHeight || 0,
  }, item   : {
    backgroundColor: "#f9c2ff", padding: 20, marginVertical: 8, marginHorizontal: 16,
  }, title  : {
    fontSize: 32,
  }, heading: {
    textAlign: "center", flex: 1, fontSize: 20,
  }, input  : {
    borderWidth: 1, borderColor: "blue",
  }, btn    : {
    color: "#fff", fontSize: 22,
  },
});

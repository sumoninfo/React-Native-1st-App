import React, { useEffect, useState }                 from "react";
import { StatusBar, StyleSheet, Text }                from "react-native";
import { Body, Button, CardItem, Container, Content } from "native-base";
import { PermissionsAndroid }                         from "react-native";
import Contacts                                       from "react-native-contacts";


const ContactList = () => {
  const [contacts, setContacts] = useState("");

  useEffect(() => {
    //getContacts();
  }, []);
  const getContacts = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      "title"         : "Contacts",
      "message"       : "This app would like to view your contacts.",
      "buttonPositive": "Please accept bare mortal",
    }).then(Contacts.getAll()
      .then((contacts) => {
        // work with contacts
        console.log(contacts.json(), "res");
      }).catch((e) => {
        console.log(e, "error");
      }));
  };
  return (<>
    <StatusBar barStyle="dark-content" />
    <Container>
      <Content>
        <CardItem header>
          <Text style={styles.heading}>Contact List</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Button primary block onPress={() => getContacts()}>
              <Text style={styles.btn}>Get Contacts</Text>
            </Button>
          </Body>
        </CardItem>
      </Content>
    </Container>
  </>);
};
const styles      = StyleSheet.create({
  heading : {
    textAlign: "center", flex: 1, fontSize: 20,
  }, input: {
    borderWidth: 1, borderColor: "blue",
  }, btn  : {
    color: "#fff", fontSize: 22,
  },
});
export default ContactList;

import React, { useState }                                                  from "react";
import { Alert, StatusBar, StyleSheet, Text }                               from "react-native";
import { CardItem, Container, Content, Header, Input, Title, Button, Body } from "native-base";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Login    = ({navigation}) => {
  const [name, setName]     = useState("");
  const [number, setNumber] = useState("");

  /**
   * set user data in local storage
   *
   * @returns {Promise<void>}
   */
  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("number", number);
      await formReset();
      await getUserData();
    } catch (e) {
      console.log(e, "error");
    }
  };

  /**
   * get user data from local storage
   *
   * @returns {Promise<void>}
   */
  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        console.log(value, "name");
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  /**
   * user form reset
   */
  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content>
          <Header>
            <Title>
              Potacon
            </Title>
          </Header>
          <CardItem header>
            <Text style={styles.heading}>Enter your name & number</Text>
          </CardItem>
          <CardItem>
            <Input value={name} onChangeText={(value) => setName(value)}
                   placeholder="Enter Name" style={styles.input} />
          </CardItem>
          <CardItem>
            <Input type="number" value={number} onChangeText={(value) => setNumber(value)}
                   placeholder="Enter Number" style={styles.input} />
          </CardItem>
          <CardItem>
            <Body>
              <Button primary block onPress={() => saveUserData()}>
                <Text style={styles.btn}>Save</Text>
              </Button>
            </Body>
          </CardItem>
        </Content>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    flex     : 1,
    fontSize : 20,
  },
  input  : {
    borderWidth: 1,
    borderColor: "blue",
  },
  btn    : {
    color   : "#fff",
    fontSize: 22,
  },
});
export default Login;

import React, { useState }                                   from "react";
import { StatusBar, StyleSheet, Text }                       from "react-native";
import { CardItem, Container, Content, Input, Button, Body } from "native-base";

const Calling = () => {
  const [number, setNumber] = useState("");

  const calling = () => {
    console.log(number, "number");
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content>
          <CardItem header>
            <Text style={styles.heading}>Calling</Text>
          </CardItem>
          <CardItem>
            <Input value={number} onChangeText={(value) => setNumber(value)}
                   placeholder="Enter Number for calling" style={styles.input} />
          </CardItem>
          <CardItem>
            <Body>
              <Button primary block onPress={() => calling()}>
                <Text style={styles.btn}>Calling</Text>
              </Button>
            </Body>
          </CardItem>
        </Content>
      </Container>
    </>
  );
};
const styles  = StyleSheet.create({
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
export default Calling;

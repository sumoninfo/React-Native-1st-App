import React, { useState }                                   from "react";
import { StatusBar, StyleSheet, Text }                       from "react-native";
import { CardItem, Container, Content, Input, Button, Body } from "native-base";
import AsyncStorage                                          from "@react-native-async-storage/async-storage";

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from "react-native-webrtc";

export default function Calling({ navigation, ...props }) {
  // const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
  // const pc = new RTCPeerConnection(configuration);

  return (<>
    <StatusBar barStyle="dark-content" />
    <Container>
      <Content>
        <CardItem header>
          <Text style={styles.heading}>Calling</Text>
        </CardItem>
        <CardItem>
          <Input
            placeholder="Enter Number for calling" style={styles.input} />
        </CardItem>
        <CardItem>
          <Body>
            <Button mode="contained"
                    primary block>
              <Text style={styles.btn}>Calling</Text>
            </Button>
          </Body>
        </CardItem>
      </Content>
    </Container>
  </>);
};
const styles = StyleSheet.create({
  heading : {
    textAlign: "center", flex: 1, fontSize: 20,
  }, input: {
    borderWidth: 1, borderColor: "blue",
  }, btn  : {
    color: "#fff", fontSize: 22,
  },
});

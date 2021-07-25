import React                               from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {NativeRouter}                      from "react-router-native";

import NabBar                                                             from "./src/views/layouts/NabBar";
import RouterPage                                                         from "./src/router/Index";
import {Body, Button, CardItem, Container, Content, Header, Input, Title} from "native-base";

const App = () => {
    return (
        <NativeRouter>
            <StatusBar barStyle="dark-content"/>
            <Container>
                <Content>
                    <NabBar/>
                    <CardItem>
                        <RouterPage/>
                    </CardItem>
                </Content>
            </Container>
        </NativeRouter>
    );
};
export default App;

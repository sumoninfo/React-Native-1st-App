import React, {useState}                                                  from "react";
import {Alert, StatusBar, StyleSheet, Text}                               from "react-native";
import {CardItem, Container, Content, Header, Input, Title, Button, Body} from "native-base";

import axios from "axios";

const App    = () => {
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    const loginFunc = async () => {
        axios.post('http://localhost:8000/api/v1/login', {
            email,
            password
        }).then(function (response) {
            console.log(response.data)
            alert(response);
        }).catch(function (error) {
            // handle error
            alert(error.message);
        }).finally(function () {
            // always executed
            alert('Finally called');
        });
    }
    const onPress   = (alertTitle) => {
        Alert.alert(alertTitle);
    };
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Container>
                <Content>
                    <Header>
                        <Title>
                            Login
                        </Title>
                    </Header>
                    <CardItem header>
                        <Text style={styles.heading}>Login with Laravel API</Text>
                    </CardItem>
                    <CardItem>
                        <Input value={email} onChangeText={(value) => setEmail(value)}
                               placeholder="Enter Email" style={styles.input}/>
                    </CardItem>
                    <CardItem>
                        <Input value={password} onChangeText={(value) => setPassword(value)}
                               placeholder="Enter Password" style={styles.input}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button primary block onPress={() => loginFunc()}>
                                <Text style={styles.btn}>Login</Text>
                            </Button>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text onPress={() => onPress("ChildTitle")}
                              style={{color: "black", fontSize: 18}}>Click Me</Text>
                    </CardItem>
                </Content>
            </Container>
        </>
    );
};
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        flex     : 1,
        fontSize : 20
    },
    input  : {
        borderWidth: 1,
        borderColor: 'blue'
    },
    btn    : {
        color   : '#fff',
        fontSize: 22
    }
})
export default App;

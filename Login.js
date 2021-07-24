import React, {useState}                                                        from "react";
import {Alert, StatusBar, StyleSheet, Text}                                     from "react-native";
import {Card, CardItem, Container, Content, Header, Input, Title, Button, Body} from "native-base";

const App    = () => {
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    const loginFunc = async () => {
        Alert.alert("okkk")
    }
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
                        <Input placeholder="Enter Email" style={styles.input}/>
                    </CardItem>
                    <CardItem>
                        <Input value={password} onChangeText={(value) => setPassword(value)}
                               placeholder="Enter Password" style={styles.input}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button primary block onPress={() => loginFunc}>
                                <Text style={styles.btn}>Login</Text>
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

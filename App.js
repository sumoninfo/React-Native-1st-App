import React, {Component} from 'react';
import {Text, View}       from "react-native";

class App extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent:"center", height: "100%", width: "100%", backgroundColor: 'red'}}>
                <Text>Hello</Text>
                <Text>AAA</Text>
                <Text>SSSS</Text>
                <Text>DDDD</Text>
            </View>
        );
    }
}

export default App;

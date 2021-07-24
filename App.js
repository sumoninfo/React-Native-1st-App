import React, {Component}  from 'react';
import {Image, Text, View} from "react-native";

class App extends Component {
    render() {
        return (
            <View style={{height: "100%", width: '100%'}}>
                <Image style={{height: "50%", width: '100%'}}
                       source={{uri: 'https://d33wubrfki0l68.cloudfront.net/7e97b18b02060f1d4b65a5850b49e2488da391bb/d60ff/img/homepage/dissection/3.png'}}/>

                <Image
                       source={require("./images/facebook.png")}/>
                <Image style={{height: "50%", width: '100%'}}
                       source={require("./images/instagram.png")}/>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default App;

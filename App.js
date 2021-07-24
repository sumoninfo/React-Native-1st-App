import React, {Component} from 'react';
import {Text, View}       from "react-native";

class App extends Component {
    render() {
        return (
            <View style={{
                flexDirection  : 'row',
                justifyContent : "center",
                height         : "100%",
                width          : "100%",
                backgroundColor: 'red'
            }}>
                <View style={{
                    flexDirection  : 'row',
                    justifyContent : "center",
                    height         : "80%",
                    width          : "80%",
                    backgroundColor: 'green'
                }}>
                    <View style={{
                        flexDirection  : 'column',
                        justifyContent : "center",
                        height         : "50%",
                        width          : "50%",
                        backgroundColor: 'blue'
                    }}></View>
                </View>

            </View>
        );
    }
}

export default App;

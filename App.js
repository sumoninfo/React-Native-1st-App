import React, {Component} from 'react';
import {Text, View}       from "react-native";

class App extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                height       : "100%",
                width        : "100%",
            }}>
                <View style={{
                    backgroundColor: "orange",
                    flexDirection  : 'column',
                    height         : "100%",
                    width          : "32%"
                }}>
                </View>
                <View style={{
                    backgroundColor: "red",
                    flexDirection  : 'column',
                    height         : "100%",
                    width          : "32%"
                }}>
                </View>
                <View style={{
                    backgroundColor: "gray",
                    flexDirection  : 'column',
                    height         : "100%",
                    width          : "32%"
                }}>
                </View>
            </View>
        );
    }
}

export default App;

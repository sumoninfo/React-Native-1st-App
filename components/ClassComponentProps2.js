import React, {Component} from 'react';
import {Text, View}       from "react-native";

class ClassComponentProps2 extends Component {
    render() {
        return (
            <View>
                <Text>Name: {this.props.name}</Text>
                <Text>City: {this.props.city}</Text>
                <Text>Age: {this.props.age}</Text>
            </View>
        );
    }
}

export default ClassComponentProps2;

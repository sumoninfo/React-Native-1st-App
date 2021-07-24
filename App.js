import React, {Component}   from 'react';
import {View}               from "react-native";
import ClassComponentProps2 from "./components/ClassComponentProps2";

class App extends Component {
    render() {
        return (
            <View>
                <ClassComponentProps2 name="Sayma" age="24" city="Dhaka"/>
            </View>
        );
    }
}

export default App;

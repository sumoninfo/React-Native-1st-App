import React, {Component}          from 'react';
import {Alert, Button, Text, View} from "react-native";

class App extends Component {
    alertMe = () => {
        Alert.alert("hello");
    }

    render() {
        return (
            <View>
                <Button color="green" title="Save" onPress={this.alertMe}/>
            </View>
        );
    }
}

export default App;

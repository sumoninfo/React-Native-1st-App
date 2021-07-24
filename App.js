import React, {Component}   from 'react';
import {Button, Text, View} from "react-native";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Summon',
            age : 24,
            city: 'Dhaka'
        }
    }

    changeData = () => {
        this.setState({
            name: 'Samy',
            age : 20,
            city: 'Mohammadpur'
        })
    }

    render() {
        return (
            <View>
                <Text>Name: {this.state.name}</Text>
                <Text>Age: {this.state.age}</Text>
                <Text>City: {this.state.city}</Text>
                <Button title="Click me" onPress={this.changeData}/>
            </View>
        );
    }
}

export default App;

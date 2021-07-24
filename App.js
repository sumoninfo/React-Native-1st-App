import React, {useState}    from 'react';
import {Button, Text, View} from "react-native";

const MyComponent = () => {
    const [state, setState] = useState({
        name: 'Sumon',
        city: 'Dhaka',
    });
    const updateData        = () => {
        setState({
            name: 'Sayma',
            city: "Narayangong"
        })
    }
    return (
        <View>
            <Text>Name: {state.name}</Text>
            <Text>City: {state.city}</Text>
            <Button title="Update State Data" onPress={updateData}/>
        </View>
    );
};

export default MyComponent;

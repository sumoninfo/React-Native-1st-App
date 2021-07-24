import React        from 'react';
import {Text, View} from "react-native";

const FuncComponentProps1 = ({name, age, address}) => {
    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Address: {address.city},  {address.state}</Text>
        </View>
    );
};

export default FuncComponentProps1;

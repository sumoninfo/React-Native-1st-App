import React, {useState} from 'react';
import {View}            from "react-native";
import Component1        from "./components/Component1";

const MyComponent = () => {
    const [name, setName]       = useState("Sumon");
    const [age, setAge]         = useState(24);
    const [address, setAddress] = useState({
        city : 'Mohammadpur',
        state: "Dhaka"
    });
    return (
        <View>
            <Component1 name={name} age={age} address={address}/>
        </View>
    );
};

export default MyComponent;

import React                       from "react";
import {StyleSheet, Text, View}    from "react-native";
import {NativeRouter} from "react-router-native";

import NabBar     from "./src/views/layouts/NabBar";
import RouterPage from "./src/router/Index";

const App    = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <NabBar/>
                <RouterPage/>
            </View>
        </NativeRouter>
    );
};
const styles = StyleSheet.create({
    container : {
        marginTop: 25,
        padding  : 10
    },
    header    : {
        fontSize: 20
    },
    nav       : {
        flexDirection : "row",
        justifyContent: "space-around"
    },
    navItem   : {
        flex      : 1,
        alignItems: "center",
        padding   : 10
    },
    subNavItem: {
        padding: 5
    },
    topic     : {
        textAlign: "center",
        fontSize : 15
    }
});
export default App;

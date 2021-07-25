import React                         from "react";
import {StyleSheet, Text, View}      from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Home                          from "./src/views/pages/Home";
import About                         from "./src/views/pages/About";
import Posts                         from "./src/views/pages/Posts";

const App = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                        <Text>Home</Text>
                    </Link>
                    <Link
                        to="/about"
                        underlayColor="#f0f4f7"
                        style={styles.navItem}
                    >
                        <Text>About</Text>
                    </Link>
                    <Link
                        to="/topics"
                        underlayColor="#f0f4f7"
                        style={styles.navItem}
                    >
                        <Text>Topics</Text>
                    </Link>
                </View>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Posts} />
            </View>
        </NativeRouter>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
});
export default App;

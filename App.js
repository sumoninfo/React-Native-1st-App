import React                from "react";
import {StatusBar}          from "react-native";
import {NativeRouter}       from "react-router-native";
import {Container, Content} from "native-base";

import NabBar     from "./src/views/layouts/NabBar";
import RouterPage from "./src/router/Index";

const App = () => {
    return (
        <NativeRouter>
            <StatusBar barStyle="dark-content"/>
            <Container>
                <NabBar/>
                {/*<Content>*/}
                <RouterPage/>
                {/*</Content>*/}
            </Container>

        </NativeRouter>
    );
};
export default App;

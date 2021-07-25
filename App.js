import React                from "react";
import {StatusBar}          from "react-native";
import {NativeRouter}       from "react-router-native";
import {Container, Content} from "native-base";

import NabBar     from "./src/views/layouts/NabBar";
import RouterPage from "./src/router/Index";
import Footer     from "./src/views/layouts/Footer";

const App = () => {
    return (
        <NativeRouter>
            <StatusBar barStyle="dark-content"/>
            <Container>
                <NabBar/>
                {/*<Content>*/}
                <RouterPage/>
                {/*</Content>*/}
                {/*<Footer/>*/}
            </Container>

        </NativeRouter>
    );
};
export default App;

import React                             from "react";
import {Text}                            from "react-native";
import {Button, Footer, FooterTab, Icon} from "native-base";

const FooterApp = () => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button vertical active>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}
export default FooterApp;

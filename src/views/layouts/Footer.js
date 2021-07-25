import React                               from "react";
import { Text }                            from "react-native";
import { Button, Footer, FooterTab, Icon } from "native-base";
import { Link }                            from "react-router-native";

const FooterApp = () => {
  return (
    <Footer>
      <FooterTab>

        {/*<Link to="/about">*/}
          <Button>
            <Text>Apps</Text>
          </Button>
        {/*</Link>*/}

        <Button>
          <Text>Camera</Text>
        </Button>
        <Button active>
          <Text>Navigate</Text>
        </Button>
        <Button>
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default FooterApp;

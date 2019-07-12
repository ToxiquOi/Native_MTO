import React, {Component, Fragment} from 'react';
import Text from "react-native";

const style = StyleSheet.create({
   container: {
       textAlign: 'center',
       justifyContent: 'center',
   },

});

export default class AboutScreen extends Component {

    render() {
        return (
          <Fragment style={style.container}>
              <Text>
                  About Me
              </Text>
          </Fragment>
        );
    }
}

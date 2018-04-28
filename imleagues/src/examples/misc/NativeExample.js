import React from "react";
import {
  View,
  Platform,
  Text,
} from "react-native";

class NativeExample extends React.Component {
  constructor(props) {
    super(props);

    this.bannerError = this.bannerError.bind(this);
  }

  bannerError(e) {
    /* eslint-disable */
    console.log(" banner error", e);
    /* eslint-enable */
  }

  render() {
    return (
      <View>
        <View style={{ alignItems: "center", justifyContent: "center"}}>
          <Text>demo!</Text>
        </View>
      </View>
    );
  }
}

export default NativeExample;

import React from "react";
import {
  View,
  Platform,
  Text,
  NativeAppEventEmitter,
  ToastAndroid,
} from "react-native";
import RNReactNativeMyLib from 'react-native-myLib';


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


  componentDidMount() {
    RNReactNativeMyLib.show('Awesome', 10);

    NativeAppEventEmitter.addListener(
      "SwipeCardEvent",
      (s) => {
        ToastAndroid.show(s + " from SwipeCardEvent", 10);
      }
    );

    RNReactNativeMyLib.rnCallNative("orignal Demo", (s) => {
      //ToastAndroid.show(s,10);
    });
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>demo!</Text>
        </View>
      </View>
    );
  }
}

export default NativeExample;

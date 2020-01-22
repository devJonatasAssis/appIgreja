const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  logo: {
    position: "absolute",
    left: 5,
    top: 50,
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

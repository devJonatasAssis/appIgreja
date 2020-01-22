const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: 5,
    top: 100,
    width: 300,
    height: 79,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};

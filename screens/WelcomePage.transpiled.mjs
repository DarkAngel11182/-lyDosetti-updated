import React from "react";
import Button from "./Button";

import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Button from '../components/Button'; // Assuming Button is a generalized component
import { FontFamily, Color, FontSize, Border } from '../GlobalStyles';
const WelcomePage = () => {
  const navigation = useNavigation();
  const handlePress = screen => {
    navigation.navigate(screen);
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.logo,
    source: require('../assets/logo-placeholder.png')
  }), /*#__PURE__*/React.createElement(Button, {
    title: "Log in",
    onPress: () => handlePress('Login')
  }), /*#__PURE__*/React.createElement(Button, {
    title: "Create Account",
    onPress: () => handlePress('CreateAccount')
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.forgotAccount
  }, "Forgot account"), /*#__PURE__*/React.createElement(View, {
    style: styles.topBar
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.title
  }, "MedMate")), /*#__PURE__*/React.createElement(Text, {
    style: styles.about
  }, "About"));
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorLightcyan
  },
  logo: {
    width: 184,
    height: 176,
    marginBottom: 20
  },
  forgotAccount: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    marginTop: 20
  },
  topBar: {
    height: 36,
    width: '100%',
    backgroundColor: Color.colorGray_400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: FontSize.size_mini,
    fontWeight: '800',
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200
  },
  about: {
    textDecoration: 'underline',
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    marginTop: 10
  }
});
export default WelcomePage;

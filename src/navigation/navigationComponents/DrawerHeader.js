import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoSVGBig from '../../resources/svg/LogoSVGBig';
import { containerStyles } from '../../styles/containerStyles';
import { titlesStyles } from '../../styles/titlesStyles';
import strings from '../../resources/strings';
const DrawerHeader = () => {
  return (
    <View style={containerStyles.headerContainer}>
      <LogoSVGBig/>
      <Text style={titlesStyles.header}>{strings.app.name}</Text>
    </View>
  );
};

export default DrawerHeader;

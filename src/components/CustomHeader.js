import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Platform } from 'react-native';
import LogoSVG from '../resources/svg/LogoSVG';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" color="white" onPress={() => navigation.openDrawer()} />
      <View style={styles.logoContainer}>
        <LogoSVG />
      </View>
      <View style={{ width: 48 }} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    backgroundColor: 'white',
  },
});

export default CustomHeader;

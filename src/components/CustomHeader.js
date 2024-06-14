// src/components/CustomHeader.js
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://static.thenounproject.com/png/317039-200.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: 48 }} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
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

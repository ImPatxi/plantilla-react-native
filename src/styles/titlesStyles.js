// src/styles/titlesStyles.js
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export const titlesStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.text,
    marginBottom: 20,
  },
  linkButton: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  header: {
    fontSize: 14,
    color: 'white',
  },
});
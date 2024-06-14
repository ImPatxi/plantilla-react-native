// src/constants/theme.js
import { DefaultTheme } from 'react-native-paper';
import Colors from './Colors';

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
    text: Colors.text,
    placeholder: Colors.text,
    surface: Colors.surface,
  },
};

export default theme;

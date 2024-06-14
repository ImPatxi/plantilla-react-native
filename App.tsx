import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation.js';
import theme from './src/constants/theme.js';

const combinedTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...theme.colors,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={combinedTheme}>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

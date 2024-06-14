import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation.js';
import theme from './src/constants/theme.js';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

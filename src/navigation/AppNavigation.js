import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useStore from '../store/useStore';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const { token } = useStore();

  return (
      <Stack.Navigator>
        {token ? (
          <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
  );
}

export default AppNavigation;

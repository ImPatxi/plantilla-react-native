import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import ForgotPassword from '../views/Auth/ForgotPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;

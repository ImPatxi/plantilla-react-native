import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/App/Home';
import SOS from '../views/App/SOS';
import Cameras from '../views/App/Cameras';
import Locks from '../views/App/Locks';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SOS" component={SOS} />
      <Tab.Screen name="Cameras" component={Cameras} />
      <Tab.Screen name="Locks" component={Locks} />
    </Tab.Navigator>
  );
}

export default TabNavigator;

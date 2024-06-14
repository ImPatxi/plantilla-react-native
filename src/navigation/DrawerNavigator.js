import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../views/Drawer/Profile';
import Events from '../views/Drawer/Events';
import Help from '../views/Drawer/Help';
import Logout from '../views/Drawer/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

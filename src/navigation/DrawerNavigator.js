import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import TabNavigator from './TabNavigator';
import Profile from '../views/Drawer/Profile';
import Events from '../views/Drawer/Events';
import Help from '../views/Drawer/Help';
import Logout from '../views/Drawer/Logout';
import CustomHeader from '../components/CustomHeader';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: colors.background }}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <CustomHeader />,
        drawerStyle: { backgroundColor: colors.background },
      }}
    >
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

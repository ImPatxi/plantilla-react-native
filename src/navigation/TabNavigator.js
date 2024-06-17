import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Home from '../views/App/Home';
import SOS from '../views/App/SOS';
import Cameras from '../views/App/Cameras';
import Locks from '../views/App/Locks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.surface },
        headerTintColor: Colors.text,
        tabBarStyle: { backgroundColor: Colors.surface },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text,
        headerShown: false,
        tabBarIconStyle: { size: 30 },
        tabBarLabelStyle: { fontSize: 12 }
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SOS"
        component={SOS}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alarm" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cámaras"
        component={Cameras}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cerraduras"
        component={Locks}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lock" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

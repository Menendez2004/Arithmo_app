import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


//Screens
import { InfoProfileScreen } from '../../views/profile/infoProfile';
import { SelecDificultScreen } from '../Dificults/selecDificultScreen';
import { SettingsScreen } from '../Settings/SettingsScreen';

const Tab = createBottomTabNavigator();
  export default function Navbar(){
    return (

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused
                ? 'person-circle-outline'
                : 'person-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'settings-outline';
            } else if (route.name === 'Dificults') {
              iconName = focused ? 'game-controller-outline' : 'game-controller-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05BFDB',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Profile" component={InfoProfileScreen} />
        <Tab.Screen name="Dificults" component={SelecDificultScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>    
      );
  }
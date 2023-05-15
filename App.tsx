import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/src/views/Home/HomeScreen';
import { RegisterScreen } from './app/src/views/Register/RegisterScreen';
import { SelecDificultScreen } from './app/src/views/Dificults/selecDificultScreen';
import { FacilScreen } from './app/src/views/Dificults/FacilScreen';
import { DificilScreen } from './app/src/views/Dificults/DificilScreen';
import { MediumScreen } from './app/src/views/Dificults/MediumScreen';
import { ExpertScreen } from './app/src/views/Dificults/ExpertScreen';
import { HomepageScream } from './app/src/views/index/HomepageScream';
import { InfoProfileScreen } from './app/src/views/profile/infoProfile';
import { GameScreen } from './app/src/views/game/GameScreen';
import { SettingsScreen } from './app/src/views/Settings/SettingsScreen';
import { PorfileUpdateScreen } from './app/src/views/profile/editProfile/editiProfile';
import { User } from './app/src/Domain/entities/User';

export type RootStackParamList = {
  //principals screens 
  HomeScreen: undefined,
  RegisterScreen: undefined,
  InfoProfileScreen: undefined,

  SelecDificultScreen: undefined,
  FacilScreen: undefined,
  DificilScreen: undefined,
  MediumScreen: undefined,
  ExpertScreen: undefined,
  HomepageScream: undefined,
  GameScreen: undefined,
  SettingsScreen: undefined,
  PorfileUpdateScreen: {user: User},
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            // headerShown: true,
            title: "Registrate"
          }} />
        <Stack.Screen
          name="SelecDificultScreen"
          component={SelecDificultScreen}
          options={{
            headerShown: false,
            title: "DificultScreen"
          }} />
        <Stack.Screen
          name="FacilScreen"
          component={FacilScreen}
          options={{
            headerShown: false,
            title: "FacilScreen"
          }} />
        <Stack.Screen
          name="DificilScreen"
          component={DificilScreen}
          options={{
            headerShown: false,
            title: "DificilScreen"
          }} />
        <Stack.Screen
          name="MediumScreen"
          component={MediumScreen}
          options={{
            headerShown: false,
            title: "MediumScreen"
          }} />
        <Stack.Screen
          name="ExpertScreen"
          component={ExpertScreen}
          options={{
            headerShown: false,
            title: "ExpertScreen"
          }} />
        <Stack.Screen
          name='HomepageScream'
          component={HomepageScream}
          options={{
            headerShown: false,
            title: "Homepage"
          }} />

        <Stack.Screen
          name='GameScreen'
          component={GameScreen}
          options={{
            headerShown: false,
            title: "GameScreen"
          }} />

        <Stack.Screen
          name='SettingsScreen'
          component={SettingsScreen}
          options={{
            headerShown: false,
            title: "SettingsScreen"
          }} />

          <Stack.Screen
            name="InfoProfileScreen"
            component={InfoProfileScreen}
            options={{
              headerShown: false,
              title: "InfoProfileScreen"
            }}
          />

          <Stack.Screen
          name='PorfileUpdateScreen'
          component={PorfileUpdateScreen}
          options={{
            headerShown: true,
            title: "EditiProfile"
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
};
export default App;
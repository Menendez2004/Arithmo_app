import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/views/Home/HomeScreen';
import { RegisterScreen } from './app/views/Register/RegisterScreen';
import { DificultScreen } from './app/views/Dificults/DificultScreen';
import { FacilScreen } from './app/views/Dificults/FacilScreen';
import { DificilScreen } from './app/views/Dificults/DificilScreen';
import { MediumScreen } from './app/views/Dificults/MediumScreen';
import { ExpertScreen } from './app/views/Dificults/ExpertScreen';
import { HomepageScream } from './app/views/index/HomepageScream';
import { InfoProfileScreen } from './app/views/profile/infoProfile';

export type RootStackParamList ={
  //principals screens 
  HomeScreen: undefined,
  RegisterScreen: undefined,
  InfoProfileScreen: undefined,

  // DificultScreen: undefined,
  // FacilScreen: undefined,
  // DificilScreen: undefined,
  // MediumScreen: undefined,
  // ExpertScreen: undefined,
  // HomepageScream: undefined,
};

const Stack= createNativeStackNavigator<RootStackParamList>();

const App = () =>{
  return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen} 
        options={{
          headerShown: true,
          title: "Registrate"
        }}/>
        <Stack.Screen
          name="InfoProfileScreen"
          component={InfoProfileScreen}
        />
        {/* <Stack.Screen 
        name="DificultScreen" 
        component={DificultScreen} 
        options={{
          headerShown: true,
          title: "DificultScreen"
        }}/>
        <Stack.Screen 
        name="FacilScreen" 
        component={FacilScreen} 
        options={{
          headerShown: true,
          title: "FacilScreen"
        }}/>
        <Stack.Screen 
        name="DificilScreen" 
        component={DificilScreen} 
        options={{
          headerShown: true,
          title: "DificilScreen"
        }}/>
        <Stack.Screen 
        name="MediumScreen" 
        component={MediumScreen} 
        options={{
          headerShown: true,
          title: "MediumScreen"
        }}/>
        <Stack.Screen 
        name="ExpertScreen" 
        component={ExpertScreen} 
        options={{
          headerShown: true,
          title: "ExpertScreen"
        }}/>
        <Stack.Screen 
        name='HomepageScream' 
        component={HomepageScream} 
        options={{
          headerShown: true,
          title: "Homepage"
        }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
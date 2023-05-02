import React from 'react'
import { Button, Text, View } from 'react-native'
import ServiceProfileInfo from './ServiceProfileInfo'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';


interface Props extends StackScreenProps<RootStackParamList, 'InfoProfileScreen'>{};

export const InfoProfileScreen = ({navigation, route}: Props) => {

  const {removeSession} = ServiceProfileInfo();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
        onPress={() =>{
          removeSession();
          navigation.navigate('HomeScreen')
        }}
        title='Cerrar sesión'/>
    </View>
  )
}

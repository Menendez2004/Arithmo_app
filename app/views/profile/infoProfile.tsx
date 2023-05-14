import React from 'react'
import { Button, Text, View } from 'react-native'
import ServiceProfileInfo from './ServiceProfileInfo'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import ProfileStyle from '../../styles/ProfileStyle';
import { Ionicons } from '@expo/vector-icons';



interface Props extends StackScreenProps<RootStackParamList, 'InfoProfileScreen'>{};

export const InfoProfileScreen = ({navigation, route}: Props) => {

  const {removeSession} = ServiceProfileInfo();
  
  return (
    <View style={{flex: 1, }}>

        <View style={ProfileStyle.container}>

          <Ionicons 
          name='person-circle-outline'
          size={150} 
          color='#088395'/>

          <Text style={ProfileStyle.container_text} >Steve Sánchez</Text>
        </View>

          <Text style={{fontWeight: 'bold', fontSize: 20, color:'#0A4D68', marginLeft: 30, marginTop: 15}} >
            Información del usuario
          </Text>

        <View style={ProfileStyle.container_2}>
          <View style={ProfileStyle.container_3}>
            <View style={ProfileStyle.container_icon}>
              
              <Ionicons 
              name='person-circle-outline' 
              size={40}
              color='#0A4D68'  />
            </View>

            <View>

              <Text style={{color:'#0A4D68', fontWeight: 'bold'}}>Nombre:</Text>
              <Text style={{color:'#0A4D68', }}>Steve</Text>

            </View> 
          </View>

          <View style={ProfileStyle.container_3}>
            <View style={ProfileStyle.container_icon}>
              
              <Ionicons 
              name='person-circle-outline' 
              size={40}
              color='#0A4D68'  />
            </View>

            <View>

              <Text style={{color:'#0A4D68', fontWeight: 'bold'}}>Apellido:</Text>
              <Text style={{color:'#0A4D68', }}>Sánchez</Text>

            </View> 
          </View>

          <View style={ProfileStyle.container_3}>
            <View style={ProfileStyle.container_icon}>
              
              <Ionicons 
              name='mail-outline' 
              size={40}
              color='#0A4D68' 
              />
            </View>

            <View>

              <Text style={{color:'#0A4D68', fontWeight: 'bold'}}>Email:</Text>
              <Text style={{color:'#0A4D68', }}>steve@gmail.com</Text>

            </View> 
          </View>
          <View style={ProfileStyle.container_3}>
            <View style={ProfileStyle.container_icon}>
              
              <Ionicons 
              name='male-outline' 
              size={40}
              color='#0A4D68'  />
            </View>

            <View>

              <Text style={{color:'#0A4D68', fontWeight: 'bold'}}>Genero:</Text>
              <Text style={{color:'#0A4D68', }}>Masculino</Text>

            </View> 
          </View>
          <View style={ProfileStyle.container_3}>
            <View style={ProfileStyle.container_icon}>
              
              <Ionicons 
              name='calendar-outline' 
              size={40}
              color='#0A4D68'  />
            </View>

            <View>

              <Text style={{color:'#0A4D68', fontWeight: 'bold'}}>Genero:</Text>
              <Text style={{color:'#0A4D68', }}>Masculino</Text>

            </View> 
          </View>
        </View>
        
            
        <View>
          <Button
          onPress={() =>{
            removeSession();
            navigation.navigate('HomeScreen')
          }}
          title='Cerrar sesión'/>   

          <Button
          onPress={() =>{
            
            navigation.navigate('EditiProfile')
          }}
          title='Editar Perfil'/>   
            </View>
            
            
    </View>
  )
}

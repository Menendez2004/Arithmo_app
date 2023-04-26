import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { RoundedBtm } from '../../RoundedBtm';
import Homepage from '../../styles/Homepage';
export const HomepageScream = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <View style={Homepage.conthome}>
      <Image style={Homepage.imgi} source={require('../../imgs/users.png')} />
      <Image style={Homepage.imgi2} source={require('../../imgs/settings.png')} />
      <Text style={Homepage.info}><Text style={Homepage.a}>A</Text><Text style={Homepage.r}>r</Text><Text style={Homepage.i}>i</Text><Text style={Homepage.t}>t</Text><Text style={Homepage.h}>h</Text><Text style={Homepage.m}>m</Text><Text style={Homepage.o}>o</Text></Text>
    </View>
    <Text style={Homepage.sub}>Bienvenido a arithmo, un videojuego educativo que busca enriquecer tus conocimientos y llevarlos un paso mas alla de lo que imaginas
        no importa el nivel de conocimiento matematico que tengas ya que tenemos niveles que se adaptan a tus presaberes y asi puedas tener un optimo desarrollo cognitivo
      </Text>
      <TouchableOpacity>
                        <Text style={Homepage.formRegisterTex} >¡Juega ya!</Text>
                    </TouchableOpacity>
      <View style={Homepage.contnav}>
          <View>
            <Text style={Homepage.contnav1}>Home</Text>
          </View>
          <View>
          <Text style={Homepage.contnav1}>Nivels</Text>
          </View>
          <View>
          <Text style={Homepage.contnav1}>Dificultades</Text>
          </View>
          <View>
          <Text style={Homepage.contnav1}>Perfil</Text>
          </View>
      </View>
    </View>
  )
}

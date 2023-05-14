import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import EditiStyle from '../../../styles/EditStyle';
import { Ionicons } from '@expo/vector-icons';


export const EditiProfile = () => {

  return (
    <View style={EditiStyle.container}>

      <View style={[EditiStyle.container2, EditiStyle.shadowProp]}>

        <View style={[EditiStyle.circle, EditiStyle.shadowProp]}>

          <View style={EditiStyle.icon}>
            <Ionicons name="camera-outline" size={30} color={'#05BFDB'} />
          </View>

        </View>

        <View style={EditiStyle.container_3}>

          <View style={EditiStyle.container_info}>

            <View>
              <Text>Nombre</Text>
            </View>

            <View style={EditiStyle.text1}>
              <Text >Steve</Text>
            </View>


          </View>

          <View style={EditiStyle.container_info}>

            <View>
              <Text>Apellido</Text>
            </View>

            <View style={EditiStyle.text1}>
              <Text>Sanchez</Text>
            </View>

          </View>

          <View style={EditiStyle.container_info}>

            <View>
              <Text>Email</Text>
            </View>

            <View style={EditiStyle.text1}>
              <Text>Steve@gmail.com</Text>
            </View>

          </View>

          <View style={EditiStyle.container_info}>

            <View>
              <Text>Genero</Text>
            </View>

            <View style={EditiStyle.text1}>
              <Text>Masculino</Text>
            </View>

          </View>

          <View style={EditiStyle.container_info}>

            <View>
              <Text>Fecha de nacimiento</Text>
            </View>

            <View style={EditiStyle.text1}>
              <Text>17-08-2005</Text>
            </View>

          </View>

        </View>

      </View>

      <View style={EditiStyle.button}>
          <Text style={{color: '#05BFDB', fontWeight:'bold',fontSize: 15}}>Actualizar Perfil</Text>
        </View>

    </View>
  )
}

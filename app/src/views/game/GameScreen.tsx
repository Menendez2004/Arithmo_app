import React from 'react'
import {Text,View,Image,TextInput,ToastAndroid,TouchableOpacity, ScrollView} from "react-native";
import GameStyle from '../../../styles/GameStyle';

export const GameScreen = () => {
  return (
    <View style={GameStyle.container}>

        <View style={GameStyle.row}>
            <Image style={GameStyle.image1} source={require('../../../imgs/libro-2.png')} />
            
            <Image style={GameStyle.image2} source={require('../../../imgs/libro-1.png')} />
        </View>

        <View style={{alignItems:'center'}}>
            <View style={GameStyle.container_2}>
                <Text>Pregunta del nivel</Text>
            </View>
            <View style={GameStyle.rectangulo} ></View> 

        </View>

        <View style={GameStyle.container_3}>

          <View style={GameStyle.answer}>
            <Text style={GameStyle.answer_text}>Respuesta 1</Text>
          </View>

          <View style={GameStyle.answer}>
            <Text style={GameStyle.answer_text}>Respuesta 2</Text>
          </View>

          <View style={GameStyle.answer}>
            <Text style={GameStyle.answer_text}>Respuesta 3</Text>
          </View>

          <View style={GameStyle.answer}>
            <Text style={GameStyle.answer_text}>Respuesta 4</Text>
          </View>

        </View>

    </View>
  )
}
import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { RoundedBtm } from '../../RoundedBtm';
import DificultStyle from '../../styles/DIficultStyle';


export const DificultScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={DificultStyle.container} >


            <View style={DificultStyle.container_user}>

                <View style={DificultStyle.row}>
                    <Image style={DificultStyle.image1} source={require('../../imgs/usuario.png')} />
                    <Text>Steve S.</Text>
                </View>

                <Image style={DificultStyle.image2} source={require('../../imgs/resta.png')} />
            </View>

            <View style={DificultStyle.container_2}>

                <View style={DificultStyle.container_text}>
                    <Text style={DificultStyle.text}>Dificultades</Text>
                </View>

                <View style={DificultStyle.container_3}>

                    <View style={DificultStyle.dificult} >
                        <Text style={DificultStyle.dificult_text} onPress={() => navigation.navigate('FacilScreen')}>Fácil</Text>
                    </View>

                    <View style={DificultStyle.dificult} >
                        <Text style={DificultStyle.dificult_text} onPress={() => navigation.navigate('DificilScreen')}>Medio</Text>
                    </View>

                    <View style={DificultStyle.dificult} >
                        <Text style={DificultStyle.dificult_text} onPress={() => navigation.navigate('MediumScreen')}>Dificil</Text>
                    </View>

                    <View style={DificultStyle.dificult} >
                        <Text style={DificultStyle.dificult_text} onPress={() => navigation.navigate('ExpertScreen')}>Experto</Text>
                    </View>

                    
                </View>

            </View>

            <View style={DificultStyle.container_4}>

                <Image style={DificultStyle.image3} source={require('../../imgs/suma.png')} />

            </View>
        </View>
    )
}

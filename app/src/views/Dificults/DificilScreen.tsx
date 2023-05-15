import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LevelStyle from '../../../styles/LevelStyle';


export const DificilScreen = () => {
    return (
        <View style={LevelStyle.container}>

            <View style={LevelStyle.container_2}>

            <Image style={LevelStyle.image_1}  source={require('../../../imgs/multiplicar.png')} />

                <View style={LevelStyle.container_text}>
                    <Text style={LevelStyle.text}>Dificultad Dificil</Text>
                </View>
                
                <Text style={LevelStyle.level_text2}>Niveles</Text>
                <View style={LevelStyle.container_3}>

                    <View >
                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>1</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Completado</Text>
                        </View>

                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>3</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Completado</Text>
                        </View>

                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>5</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Bloqueado</Text>
                        </View>
                        
                    </View>
                    
                    
                    <View>
                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>2</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Completado</Text>
                        </View>

                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>4</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Completado</Text>
                        </View>

                        <View style={LevelStyle.container_4}>
                            <View style={LevelStyle.level}>
                                <Text style={LevelStyle.level_text}>6</Text>
                            </View>
                            <Text style={LevelStyle.text_2}>Jugar</Text>
                        </View>
                        
                    </View>

                </View>

                
            </View>
            <Image style={LevelStyle.image_2}  source={require('../../../imgs/signo.png')} />

        </View>
    )
}

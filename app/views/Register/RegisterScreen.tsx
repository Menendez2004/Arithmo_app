import React from 'react';
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import RegisterStyles from '../../styles/RegisterStyle';
import { RoundedBtm } from '../../RoundedBtm';
import { RestructuringImput } from '../../RestructuringImput';
import { RootStackParamList } from '../../../App';
import usesViewModelRegister from './ServiceRegister';

export const RegisterScreen = () => {

    const { name, email, lastName, password, confirmPassword, onChange, Register } = usesViewModelRegister()


    return (
        <View style={RegisterStyles.container}>
            {/*vsita del logo */}



            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={RegisterStyles.form}>

                <Image
                    style={RegisterStyles.burbu}
                    source={require('../../imgs/burbu.png')}
                />

                <View style={RegisterStyles.logoContainer}>
                    <Image
                        source={require('../../imgs/user_image.png')}
                        style={RegisterStyles.logoImage}
                    />
                    <Text style={RegisterStyles.logotext}>Seleciona una imagen</Text>
                </View>

                <RestructuringImput
                    placeholder='Nombres'
                    KeyboardType='default'
                    image={require('../../imgs/Name.png')}
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />



                <RestructuringImput
                    placeholder='Apellidos'
                    KeyboardType='default'
                    image={require('../../imgs/lastname.png')}
                    property='lastName'
                    onChangeText={onChange}
                    value={lastName}
                />



                <RestructuringImput
                    placeholder='Email'
                    KeyboardType='default'
                    image={require('../../imgs/email.png')}
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />


                <RestructuringImput
                    placeholder='Contraseña'
                    KeyboardType='default'
                    image={require('../../imgs/Password.png')}
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <RestructuringImput
                    placeholder='Confirmar Contraseña'
                    KeyboardType='default'
                    image={require('../../imgs/confirmpass.png')}
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />

                <View >
                    <RoundedBtm
                        text='CONFIRMAR'
                        onPress={() => Register()}
                    />
                </View>

                <Image
                    style={RegisterStyles.rightBurble}
                    source={require('../../imgs/burbuf.png')}
                />
            </View>

        </View >
    )
}

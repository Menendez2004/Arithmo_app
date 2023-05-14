//tools 
import React, { useState, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';

//components 
import styles from '../../styles/Styles';
import useViewModelHome from './ServiceHome'
import { RoundedBtm } from '../../RoundedBtm';
import { RoundedBtm2 } from '../../RoundedBtm';
import { RestructuringImput } from '../../RestructuringImput'
import { RestructuringImput1 } from '../../RestructuringImput1';
import { RootStackParamList } from '../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { };

export const HomeScreen = ({ navigation, route }: Props) => {
    const { email, password, onChange, login, errorMessage, user } = useViewModelHome();


    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])


    useEffect(() => {

        if (user?.session_token !== null && user?.session_token !== undefined) {
            navigation.replace('HomepageScream');
        }
    }, [user])

    return (
        //Etiqueta view funciona como uina columna
        //vista main, contenedor de todo
        <View style={styles.container}>
            {/*vsita del logo */}



            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={styles.form}>
                <Text style={styles.formText}>Login</Text>

                <Image
                    style={styles.burbu}
                    source={require('../../imgs/burbu.png')} />

                <View style={styles.logoContainer}>
                    <Image source={require('../../imgs/icons.png')}
                        style={styles.logoImage} />
                </View>


                <RestructuringImput

                    image={require('../../imgs/email.png')}
                    placeholder='correo electronico'
                    KeyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                {/*ivista del botón de la password*/}
                <RestructuringImput1
                    image={require('../../imgs/Password.png')}
                    placeholder='password'
                    KeyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}

                />

                <View >
                    <RoundedBtm text='ENTRAR' onPress={() => navigation.replace('SelecDificultScreen')} />
                </View>

                <View style={styles.formRegister}>
                    <Text style={styles.formRegisterText}>¿No tienes una cuenta?</Text>
                    <View >
                        <RoundedBtm2 text='Registrarse' onPress={() => navigation.navigate('RegisterScreen')} />
                    </View>
                </View>

                <Image
                    style={styles.rightBurble}
                    source={require('../../imgs/burbuf.png')} />
            </View>

        </View >);
}

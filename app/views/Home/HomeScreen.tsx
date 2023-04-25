import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/Styles';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import {RestructuringImput} from '../../RestructuringImput'
import { RoundedBtm } from '../../RoundedBtm';
import { RootStackParamList } from '../../../App';
import useViewModelHome from './ServiceHome'

export const HomeScreen = () => {
    const { email, password, onChange } = useViewModelHome()

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
                <RestructuringImput
                image={require('../../imgs/Password.png')}
                placeholder='Contraseña'
                KeyboardType='default'
                property='password'
                onChangeText={onChange}
                value={password}
                />

                <View >
                    <RoundedBtm text='ENTRAR' onPress={ () =>{
                        // console.log('Email. ' + email);
                        // console.log('Pass: ' + password)
                    }} />
                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterTex} >Registrate</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.rightBurble}
                    source={require('../../imgs/burbuf.png')} />
            </View>

        </View >  );
}

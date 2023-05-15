//Tools from react native
import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator, ToastAndroid, TouchableOpacity } from "react-native";
//Components
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import { RoundedBtm } from '../../../RoundedBtm';
import { RoundedBtm2 } from '../../../RoundedBtm';
import { RestructuringImput } from "../../../RestructuringImput";
import { RestructuringImput1 } from '../../../RestructuringImput1';
import { ModalPickImage } from "../../../src/components/modalPickImage";
//Screens
import usesViewModelRegister from "./ServiceRegister";

//styles
import RegisterStyles from "../../../styles/RegisterStyle";
import styles from '../../../styles/Styles';
import { MyColors } from "../../../styles/theme/Theme";


interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };


export const RegisterScreen = ({ navigation, route }: Props) => {
    const {
        name,
        email,
        lastName,
        password,
        confirmPassword,
        loanding,
        errorMessage,
        user,
        image,
        onChange,
        Register,
        formValid,
        SelecImage,
        TakePicture,
        edad
    } = usesViewModelRegister();

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {

        if (user?.session_token != null && user?.session_token != undefined) {
            navigation.replace('HomepageScream');
        }
    }, [user])

    return (
        <View style={RegisterStyles.container}>

            {/*vsita del logo */}

            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={RegisterStyles.form}>
                <Image
                    style={RegisterStyles.burbu}
                    source={require("../../../imgs/burbu.png")}
                />

                <View style={RegisterStyles.logoContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        {
                            image == ''
                                ? <Image
                                    source={require("../../../imgs/profile.png")}
                                    style={RegisterStyles.logoImage}
                                />
                                : <Image
                                    source={{ uri: image }}
                                    style={RegisterStyles.logoImage}
                                />
                        }
                    </TouchableOpacity>
                    <Text style={RegisterStyles.logotext}>Seleciona una imagen</Text>
                </View>

                <RestructuringImput1

                    placeholder="Nombres"
                    KeyboardType="default"
                    image={require("../../../imgs/Name.png")}
                    property="name"
                    onChangeText={onChange}
                    value={name}
                />

                <RestructuringImput1
                    placeholder="Apellidos"
                    KeyboardType="default"
                    image={require("../../../imgs/lastname.png")}
                    property="lastName"
                    onChangeText={onChange}
                    value={lastName}
                />

                <RestructuringImput1
                    placeholder="edad"
                    KeyboardType="default"
                    image={require("../../../imgs/edad.png")}
                    property="edad"
                    onChangeText={onChange}
                    value={edad}
                />
                <RestructuringImput
                    placeholder="Email"
                    KeyboardType="default"
                    image={require("../../../imgs/email.png")}
                    property="email"
                    onChangeText={onChange}
                    value={email}
                />

                <RestructuringImput1
                    placeholder="Contraseña"
                    KeyboardType="default"
                    image={require("../../../imgs/Password.png")}
                    property="password"
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <RestructuringImput1
                    placeholder="Confirmar Contraseña"
                    KeyboardType="default"
                    image={require("../../../imgs/confirmpass.png")}
                    property="confirmPassword"
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />


                <View>
                    <RoundedBtm text="CONFIRMAR" onPress={() => {
                        if (formValid()) {
                            Register();
                        }
                    }} />
                </View>
                <View style={styles.formRegister}>
                    <Text style={styles.formRegisterText}>¿Ya tienes una cuenta?</Text>
                    <View >
                        <RoundedBtm2 text='Iniciar sesión' onPress={() => navigation.navigate('HomeScreen')} />
                    </View>
                </View>


                <Image
                    style={RegisterStyles.rightBurble}
                    source={require("../../../imgs/burbuf.png")}
                />

                <ModalPickImage

                    openGalery={SelecImage}
                    openCamera={TakePicture}
                    modalUseState={modalVisible}
                    setModalUseState={setModalVisible}

                />

                {
                    loanding &&
                    <ActivityIndicator
                        style={RegisterStyles.loading}
                        size="large"
                        color={MyColors.primary} />
                }


            </View>

        </View>
    );
};

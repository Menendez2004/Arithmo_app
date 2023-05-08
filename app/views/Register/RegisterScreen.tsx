//Tools from react native
import React, { useEffect, useState } from "react";
import { Text, View, Image, ToastAndroid, TouchableOpacity } from "react-native";
//Components
import { RoundedBtm } from "../../RoundedBtm";
import { RestructuringImput } from "../../RestructuringImput";
import { ModalPickImage } from "../../src/components/modalPickImage";
//Screens
import RegisterStyles from "../../styles/RegisterStyle";
import usesViewModelRegister from "./ServiceRegister";

export const RegisterScreen = () => {
    const {
        name,
        email,
        lastName,
        password,
        confirmPassword,
        errorMessage,
        image,
        onChange,
        Register,
        formValid,
        SelecImage,
        TakePicture
    } = usesViewModelRegister();

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    return (
        <View style={RegisterStyles.container}>
            {/*vsita del logo */}

            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={RegisterStyles.form}>
                <Image
                    style={RegisterStyles.burbu}
                    source={require("../../imgs/burbu.png")}
                />

                <View style={RegisterStyles.logoContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        {
                            image == ''
                                ? <Image
                                    source={require("../../imgs/profile.png")}
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

                <RestructuringImput

                    placeholder="Nombres"
                    KeyboardType="default"
                    image={require("../../imgs/Name.png")}
                    property="name"
                    onChangeText={onChange}
                    value={name}
                />

                <RestructuringImput
                    placeholder="Apellidos"
                    KeyboardType="default"
                    image={require("../../imgs/lastname.png")}
                    property="lastName"
                    onChangeText={onChange}
                    value={lastName}
                />

                <RestructuringImput
                    placeholder="Email"
                    KeyboardType="default"
                    image={require("../../imgs/email.png")}
                    property="email"
                    onChangeText={onChange}
                    value={email}
                />

                <RestructuringImput
                    placeholder="Contraseña"
                    KeyboardType="default"
                    image={require("../../imgs/Password.png")}
                    property="password"
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <RestructuringImput
                    placeholder="Confirmar Contraseña"
                    KeyboardType="default"
                    image={require("../../imgs/confirmpass.png")}
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


                <Image
                    style={RegisterStyles.rightBurble}
                    source={require("../../imgs/burbuf.png")}
                />

                <ModalPickImage
                
                    openGalery={SelecImage}
                    openCamera={TakePicture}
                    modalUseState={modalVisible}
                    setModalUseState={setModalVisible}
                
                />
            </View>

        </View>
    );
};

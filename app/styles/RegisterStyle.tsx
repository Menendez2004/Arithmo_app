import React from "react";
import { StyleSheet } from 'react-native';

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row",
    },
    form: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 33.5,
        

    },
    burbu: {
        marginLeft: 238,
        width: 160,
        height: 95,
        marginTop: 25

    },
    texImputForm: {
        flex: 1,
        borderBottomWidth: 1,
        marginLeft: 15.5
    },
    imputForm: {
        flexDirection: "row",
        marginTop: 25//¿?

    },
    formIcon: {
        width: 25,
        height: 20,
        marginTop: 5
    },
    formIcon1: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formIconps: {
        width: 20,
        height: 25,
        marginTop: 5
    },
    formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        // marginTop: 30,//¿?

    },
    formRegisterTex: {
        fontStyle: "italic",
        color: '#8b16ff',
        borderBottomWidth: 1,
        borderBottomColor: '#8b16ff',
        fontWeight: 'bold',
        marginLeft: 10


    },
    logoContainer: {
        // position: "absolute",
        alignItems: "center",
        alignSelf: 'center',
        margin: -16.7,
        bottom: 13,
    },
    logoImage: {
        width: 120,
        height: 120,
        // marginTop: -1,
        borderRadius: 60,
        marginLeft: 2,

    },
    logotext: {
        color: 'black',
        textAlign: 'center',
        alignContent: "center",
        fontSize: 15,
        marginTop: 18,
        fontWeight: 'bold'
    },
    rightBurble: {
        width: 160,
        height: 100,
        margin: 15,
        marginLeft: -70
    },
    loading:{
        position: "absolute",
        botton: 0,
        top: 0,
        right: 0,
        left: 0
    }

});

export default RegisterStyles
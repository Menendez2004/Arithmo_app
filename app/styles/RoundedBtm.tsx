import React from "react"
import { StyleSheet } from "react-native";
import { MyColors } from './theme/Theme'

const RoundeStyleBtm = StyleSheet.create({
    RoundedButton:{
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 40,

    },
    textButton:{
        color: MyColors.background,
        fontWeight: 'bold'
    },
    RoundedButton2:{
        width: 110,
        height: 30,
        backgroundColor: MyColors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 45,
        borderRadius: 25,
        bottom: 3.5
        

    },
    textButton2:{
        color: MyColors.Text,
        fontWeight: "bold"
    },
    

})

export default RoundeStyleBtm;
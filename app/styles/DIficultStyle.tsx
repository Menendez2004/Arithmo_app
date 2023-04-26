import { StyleSheet } from 'react-native';
 import React from 'react'
 
const DificultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'

    },

    container_user:{
        paddingTop:50,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    image1:{
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
    },

    image2:{
        height:70,
        width:70,
        alignSelf: 'flex-end',
        transform: [{rotate:'45deg'}],
        marginTop: -55
    },

    container_2:{
        alignItems:'center',
        justifyContent:'center'
        
    },

    container_text:{
        backgroundColor: '#0A4D68',
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 50
    },

    text:{
        color: '#05BFDB',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    container_3:{
        marginTop: 20
    },

    dificult:{
        backgroundColor: '#088395',
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 80,
        borderRadius: 15,
    },

    dificult_text:{
        fontSize: 20,
        color: '#00FFCA'
    },

    container_4:{
        paddingTop: 50
        
    },

    image3:{
        height:70,
        width:70,
        alignSelf: 'flex-start',
        transform: [{rotate:'-25deg'}],
        marginTop: 35
    },
})

export default DificultStyle

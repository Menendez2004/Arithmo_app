import React from "react";
import { StyleSheet } from 'react-native';

const LevelStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column",
    },

    image_1:{
        height:70,
        width:70,
        alignSelf: 'flex-end',
        transform: [{rotate:'160deg'}],
        marginTop:10,
    },

    container_text:{
        backgroundColor: '#0A4D68',
        width: 290,
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

    container_2:{
        
        justifyContent: 'center',
        alignItems: 'center'
    },

    container_3:{
        flexDirection: 'row',
        marginTop: 30
    },

    container_4:{
        marginBottom: 10,
    },

    level:{
        backgroundColor:'#088395',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight:15,
        marginLeft: 15,
        
    },
    

    level_text:{
        fontSize: 20,
        color: '#00FFCA'
    },

    level_text2:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop:40,
    },

    text_2:{
        textAlign: 'center',
        fontWeight: 'bold',
    },

    image_2:{
        height:70,
        width:70,
        alignSelf: 'flex-start',
        transform: [{rotate:'160deg'}],
        marginTop: 30,
    }
})

export default LevelStyle
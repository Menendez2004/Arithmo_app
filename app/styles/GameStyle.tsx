import { StyleSheet } from 'react-native';

const GameStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column",
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },

    image1: {
        width: 80,
        height: 80,
    },

    image2: {
        width: 80,
        height: 80,
        right: 0,
        position: 'absolute',
        alignSelf: 'flex-end'
    },

    container_2: {
        backgroundColor: '#0A4D68',
        marginTop: 35,
        width: 360,
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rectangulo: {
        width: 390,
        height: 20,
        backgroundColor: '#848484',
        marginTop: -8
    },

    container_3:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    answer:{
        backgroundColor: '#088395',
        width: '80%',
        height: 70,
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom:12
    },

    answer_text:{
        textAlign: 'center',
        color: '#00FFCA',
        fontWeight: 'bold'
    }
})

export default GameStyle;

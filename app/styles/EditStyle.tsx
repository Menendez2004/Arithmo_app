import { StyleSheet } from 'react-native';

const EditiStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center'
    },

    container2: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
        height: '70%',
        alignItems: 'center',
        marginTop:'40%'
        // transform: [{translateY:50}]
    },

    shadowProp: {
        elevation: 20,
        shadowColor: '#0A4D68',
    },

    circle:{
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 80,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0,
        transform: [{translateY: -50}]
    },

    icon:{
        backgroundColor: '#0A4D68',
        alignItems: 'center',
        width: 60,
        padding: 15,
        borderRadius: 30,
        bottom:0,
    },

    container_3:{
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'column'
        
    },

    container_info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 40,
        
    },

    // line:{
    //     width: 2,
    //     height: '80%',
    //     color: '#707070'
    // },

    text1:{
        flex:1,
        alignItems: 'flex-end',
    },

    button:{
        width: '50%',
        height: 50,
        backgroundColor: '#0A4D68',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: '10%',

    }
    
})

export default EditiStyle
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
        marginTop:'25%'
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
    logoImage: {
        width: 130,
        height: 130,
        bottom: 10,
        borderRadius: 60,
        marginRight:"7%"
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

    },
    Text:{
        marginTop: 35,
        fontSize: 10,
    },
    area:{
        marginLeft:"12%",
        fontSize: 15,
        fontWeight: 'bold'
    },
    Icons:{
        fontSize:35,
        bottom: 34,
        marginLeft: "78%"
    }    
})

export default EditiStyle
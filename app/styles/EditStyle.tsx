import { StyleSheet } from 'react-native';

const EditiStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center',
    },

    container2: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
        height: '75%',
        alignItems: 'center',
        marginTop:'18%',
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
    circleIcon:{
        backgroundColor: '#0A4D68',
        width: 45,
        height: 45,
        marginLeft: 10,
        borderRadius: 80,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 15,
        transform: [{translateY: -21}]
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
        // marginTop: 100,
        
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
        margin: -65,
        fontSize: 10,
        // marginLeft:25,
        // marginTop: 100,
    },
    area:{
        marginLeft:"18%",
        fontSize: 16,
        fontWeight: 'bold',
        color: "#0A4D68",
    },
    area1:{
        marginLeft:"17%",
        fontSize: 16,
        fontWeight: 'bold',
        color: "#0A4D68",
    },
    
    Icons:{
        fontSize:35,
        bottom: 12,
        marginLeft: "70%"
    },
    Icons1:{
        fontSize:35,
        bottom: 12,
        marginLeft: "70%"
    }       
})

export default EditiStyle
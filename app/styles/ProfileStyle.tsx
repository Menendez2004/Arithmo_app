import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
    container: {
        backgroundColor: '#0A4D68',
        width: '100%',
        borderBottomLeftRadius: 55,
        flexDirection: 'row',
        alignItems: 'center'   
    },

    container_text:{
        color: '#088395',
        fontSize: 30
    },

    container_2:{
        flexDirection: 'column',
        backgroundColor: 'white',
        elevation: 20,
        width: "80%",
        height: "50%",
        justifyContent: 'center',
        padding: 15,
        marginTop: 15,
        marginBottom: 30,
        marginLeft: 30
        
    },

    container_3:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        
    },

    container_icon:{
        width:40,
        borderRadius: 40,
        backgroundColor: 'white',
        elevation: 20,
        marginRight: 10
    }
})

export default ProfileStyle
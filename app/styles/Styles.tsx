import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row",
        paddingTop: StatusBar.currentHeight,

    },
    form: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        padding: 35,
    },
    formText: {
        fontWeight: 'bold',
        bottom: 10,
        fontSize: 25,
    },
    burbu: {
        marginLeft: 225,
        width: 172,
        height: 100,
    },
    rightBurble: {
        width: 172,
        height: 100,
        margin: 55,
        marginLeft: -75,
        marginTop: 60
    },
    texImputForm: {
        flex: 1,
        borderBottomWidth: 1,
        marginLeft: 15.5
    },
    imputForm: {
        flexDirection: "row",
        marginTop: 20

    },
    formIcon: {
        width: 25,
        height: 18,
        marginLeft: -1,
        marginTop: 5,
        alignContent: "center",
        alignItems: "center"

    },
    formIcon1: {
        width: 20,
        height: 25,
        marginTop: 5,
        alignContent: "center",
        alignItems: "center"
    },
    formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 45

    },
    formRegisterText: {
        fontSize: 15.5,
        marginRight: 5,
        fontWeight: "bold"

    },
    formRegisterTex: {
        fontStyle: "italic",
        color: '#05BFDB',
        borderBottomWidth: 1,
        borderBottomColor: '#05BFDB',
        fontWeight: 'bold',
        marginLeft: 10


    },
    logoContainer: {
        alignSelf: 'center',
        margin: 48,
        marginTop: "20%"
    },
    logoImage: {

        width: 280,
        height: 70,

    },
    logotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },

});

export default styles
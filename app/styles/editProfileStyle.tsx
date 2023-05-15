import { StyleSheet, StatusBar } from "react-native";

const editProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row",
    },
    texImputForm: {
        width: "100%",
        flex: 1,
        borderBottomWidth: 1,
        marginLeft: "6%",
        bottom: "12%",
        borderBottomColor: 0

    },
    imputForm: {
        flexDirection: "row",
        width: "80%"

    },
    formIcon: {
        width: 25,
        height: 18,
        marginLeft:"7%",
        bottom: 43,
        alignContent: "center",
        alignItems: "center",
        

    },
    formIcon1: {
        width: 24,
        height: 27,
        marginLeft:"7%",
        bottom: 45
    },
    formRegisterText: {
        fontSize: 15.5,
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


});

export default editProfileStyle;
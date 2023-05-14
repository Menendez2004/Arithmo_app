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
        marginLeft: "28%",
        bottom: "31.50%",
        borderBottomColor: 0

    },
    imputForm: {
        flexDirection: "row",
        marginTop: 35,
        width: "80%"

    },
    formIcon: {
        width: 25,
        height: 18,
        marginLeft:"3%",
        bottom: "30%",
        alignContent: "center",
        alignItems: "center"

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
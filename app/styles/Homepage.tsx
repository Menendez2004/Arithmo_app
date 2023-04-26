import { StyleSheet } from 'react-native';
const Homepage = StyleSheet.create({
    info:{
        textAlign:'center',
        marginTop:-20,
        marginBottom:20,
        fontSize: 50
    },
    sub:{
        textAlign:'justify',
        marginLeft:20,
        marginRight:20,
        marginTop:29,
        marginBottom:20,
        color:'white'
    },
    contsub:{
        backgroundColor:'#2BACBF',
        width:350,
        marginLeft:20,
        borderRadius:20,
        marginTop:30
    },
    conthome:{
        backgroundColor: '#088395',
        with:100
    },
    
    imgi:{
        width:30,
        height:30,
        marginTop:10,
        marginBottom:-10
    },
    imgi2:{
        width:30,
        height:30,
        marginLeft:345,
        marginTop:-15,
    },
    contnav:{
        backgroundColor:'#088395',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height:50,
        marginTop:435.5,
    },
    formRegisterTex: {
        backgroundColor: '#088395',
        marginBottom: -110,
        marginLeft:110,
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 15,
        fontSize: 20,
        color: 'white',
        textAlign:'center',


    },
    contnav1:{
        color:'white'
    },
    imglog:{
        height:50,
        width:200,
        marginLeft:85,
        marginBottom:10
    },
    image:{
        height:70,
        width:70,
        marginTop:20
    }

})

export default Homepage

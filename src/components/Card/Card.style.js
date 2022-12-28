import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        height:Dimensions.get('window').height/3,
        width:165,
        margin:10,
        borderRadius:10,
        backgroundColor:'#e0e0e0',
        alignItems:'center'
    },
    image:{
        width:150,
        height:130,
        borderRadius:10,
        margin:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        margin:6
    },
    price:{
        fontSize:14,
        fontWeight:'bold',
        color:'gray',
        textAlign:'left'
    },
    stock:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10
    }
})
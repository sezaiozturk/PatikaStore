import React from "react";
import { View,Image ,Text} from "react-native";
import styles from './Card.style'; 

const Card=({pro})=>{
    return(
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:pro.imgURL}}/>
        <Text style={styles.title}>{pro.title}</Text>
        <Text style={styles.price}>{pro.price}</Text>
        <Text style={styles.stock}>{pro.inStock?null:<Text>STOKTA YOK</Text>}</Text>
     </View>
    )
}

export default Card;
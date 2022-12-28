import React from "react";
import { View,Text, SafeAreaView,StyleSheet,FlatList ,TextInput} from "react-native";
import Card from './components/Card'
import products from './poduct_data.json'

const App=()=>{
  return(
    <SafeAreaView>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <View style={styles.search_body}>
          <TextInput style={styles.search_text}>Ara</TextInput>
        </View>
      </View>
      <View style={styles.flat_container}>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={products}
          renderItem={({item})=><Card pro={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  body:{
    
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'purple',
    margin:10
  },
  search_body:{
    backgroundColor:'#e0e0e0',
    margin:10,
    marginTop:2,
    borderRadius:10,
    padding:10

  },
  search_text:{
    fontSize:25
  },
  flat_container:{
    margin:10,
    borderRadius:10
  }
})
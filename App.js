import React from 'react'
import { View, Text, SafeAreaView, Button , StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//React native bir proje olusturdugumda React Native mimarisi olan bir Node.js insaa ederiz //

//View Web'deki div e karsilik gelir
//Text <p> tagine karsilik gelir
//Oyle bir View ki icine eklediklerine basilabilir ->  Touchable opacity 
//Click event
function App() {
  
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.card_container}> 
     <View style={styles.card_body}>
         <Text style={styles.card_title}>Edard Stark</Text>
         <Text style={styles.card_text}>Winter is Coming</Text>
    </View>
   <TouchableOpacity style={styles.card_button_container}>
   <Text style={styles.card_button_title}> I LIKED</Text>
   </TouchableOpacity>
    </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
    borderRadius:10,
  },
  card_container:{
    backgroundColor:'white',
    borderWidth:4,
    borderRadius:10,
  },
  card_body: {
    padding:50,
  },
  card_title: {
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    alignItems:'center',
  },
  card_text:{
    margin:5,
    alignItems:'center',
  },
  card_button_container:{
  backgroundColor:'blue',
  padding:10,
  alignItems:'center',
  borderBottomRadius:10,
  },
 card_button_title:{
   fontWeight:'bold',
   fontSize:19,
  color:'white'
 }
})
export default App;

import React from 'react'
import { View, Text, SafeAreaView, Button , StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//React native bir proje olusturdugumda React Native mimarisi olan bir Node.js insaa ederiz //

//View Web'deki div e karsilik gelir
// Text <p> tagine karsilik gelir

function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}><Text>Eroooo</Text></View>
      <View style={styles.box_2}><Text>Busooo</Text></View>
      <View style={styles.box_3}><Text>Nabo</Text></View>
      <View style={styles.box_4}></View>
     
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'grey',
    justifyContent:'space-around'
  },
  box_1: {  
    flex:100,
    backgroundColor: 'blue',
    margin: 10,
    padding:10,
    borderRadius:5,
    width:30,
    height:30,
  },
  box_2: { 
    flex:100,
    backgroundColor: 'aqua',
    margin: 10,
    padding:10,
    borderRadius:5,
    width:30,
    height:30,
  },
  box_3: { 
    flex:100,
    backgroundColor: 'red',
    margin: 10,
    padding:10,
    borderRadius:5,
    width:30,
    height:30,
  },
  box_4: { 
    flex:100,
    backgroundColor: 'orange',
    margin: 10,
    padding:10,
    borderRadius:5,
    width:30,
    height:30,
  },

})
export default App;
//rowdan columna almak icin layout propslarin icine bak.
//Dikey yapiya hizalayacagim

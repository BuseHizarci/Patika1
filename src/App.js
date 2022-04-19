import React from 'react'
import { View, Text, SafeAreaView, Button , StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card/Card'


//Prop gondermek icin :  Erisecegin yer props -> Card.js 
// Ben en altta karti cagirip titlei belirliyorum
//Mainde title belirle gonder


function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Card title="Arif ISIK" text="Uzaylilar Tarafindan Kacirildim"/>
    <Card title="Serbest" text="Ilhami abi sen soyle"/>
    <Card title="Eddard 3" text="Winter is coming.."/>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
  }
})
export default App;

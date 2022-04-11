import React from 'react'
import { View, Text, SafeAreaView, Button , StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//React native bir proje olusturdugumda React Native mimarisi olan bir Node.js insaa ederiz //

//View Web'deki div e karsilik gelir
// Text <p> tagine karsilik gelir

function App() {
  const sayHello=(label)=> {
    console.log("Hello" + label);
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
       <Text>Css styling</Text>
      </View>
  
      <Button title="Press Me!" onPress={() => sayHello('Buse')} />
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  upper_view-container : { 
    backgroundColor: 'red',
    margin: 10,
    padding:10,
    borderRadius:5,
  }
  bottom_view-container : { 
    backgroundColor: 'blue',
  }
})
export default App;
//View coponenti default olarak childi kadar yer kaplar.
// En cok kullandigimiz View componentidir.
//px gerekli degil 10 brim olur.
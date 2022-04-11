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
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
      <Text>First style</Text>
      </View>
      <View style={styles.bottom_view_container}><Text>Second is bigger than first one</Text></View>

      <Button title="Press Me!" onPress={() => sayHello('Buse')} />
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  //Eger bir flex yapisi kullanacaksak ve deger verdiysek disindaki DIV e de flex belirtmek zorundayiz.
  // Distakine yer vermiyorsun ki icindekine yer veriyorsun. Bu dogru bir kullanim olmaz
  upper_view_container : { 
    flex:100,
    backgroundColor: 'red',
    margin: 10,
    padding:10,
    borderRadius:5,
  },
  bottom_view_container : { 
    flex:300,
    backgroundColor: 'blue',
    margin: 10,
    padding:10,
    borderRadius:5,
  }
})
export default App;

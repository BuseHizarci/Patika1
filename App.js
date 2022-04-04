import React from 'react'
import {View , Text , SafeAreaView } from 'react-native';
//React native bir proje olusturdugumda React Native mimarisi olan bir Node.js insaa ederiz //

//View Web'deki div e karsilik gelir
// Text <p> tagine karsilik gelir

function App () {
  return(
    <SafeAreaView>
    <View>
      <Text>
        Hello React Native World! 01.04.2022 London- UK
      </Text>
      <Text> Text 2 - Text2'te bu View in childi oluyor.</Text>
    </View>
    <Text> View in icinde olmayan bir text
    </Text>
    </SafeAreaView>
    
  )
}
export default App;
//Text2'te bu View in childi oluyor.
//Sentetic sugar :
// Export - Default = Fonksiyon olusturup App diyerek gonderiyorum. Bu index.js dosyamda kullaniliyor. 

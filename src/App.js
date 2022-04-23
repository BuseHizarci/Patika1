import React from 'react'
import { SafeAreaView , FlatList , View , Text} from 'react-native'
import NewsCard from './components/NewsCard'
import news_data from './news_data.json'

const App = () => {
  return (
    <SafeAreaView>
        <View>
        <FlatList   
           keyExtractor={(item,index) => item.u_id.toString}       
            data={news_data}
            renderItem={({item}) => < NewsCard news={item} />}
            />
        </View>
    </SafeAreaView>
  )
}

export default App 
//Bir data Json - Array bir de render item olmasi gerek
//renderItem ozel bir yapi callback funstion
//Bana data donuyor ekrana basacagi verileri tutuyor.
//Json objemden parcalayarak item cektim. surekli data.item dememek icin
//Her bir eleman item istedigin herhangi bir isimle donebilir.
// Custom component propu istedigim isim olur <Newscard news={}
//100-105 arasindakini gosteriyor ustte bes altta bes hazir bekliyor.
//190 load olmad
//2. de yuklerim 180. de yuklerim ama bunu nasil bilecegim ? 
//Key e ihtiyacim var diyor.  
//Bende ID otomatik ver onu direk hafizaya amis oluyor.
//



import React from 'react'
import { SafeAreaView , FlatList , View , Text, ScrollView ,Image} from 'react-native'
import NewsCard from './components/NewsCard'
import styles from './components/NewsCard/NewsCard.style'
import news_data from './news_data.json'
import news_banner_data from './news_banner_data.json'

const App = () => {
  const renderNews = ({item}) => < NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>   
    <Text style={styles.headerText}>News</Text>
        <FlatList   
        ListHeaderComponent={() => (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        { news_banner_data.map(bannerNews => <Image style={styles.bannerImage} source={{uri: bannerNews.imageUrl}}/>)}
     </ScrollView>
   ) }
           keyExtractor={(item,index) => item.u_id.toString()}     
            data={news_data}
            renderItem={renderNews}        
            />
       
    </SafeAreaView>
  )
}
export default App 




import React from 'react'
import { SafeAreaView , View, Image ,Text} from 'react-native'
import styles from './NewsCard.style'

const NewsCard = ({news}) => {
 
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imageUrl}} />
            <View style={styles.inner_container}>
              <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NewsCard
//News Card bes kere tetiklendi props bes kere dondu. 
//Propslar json obje formatinda geliyor.
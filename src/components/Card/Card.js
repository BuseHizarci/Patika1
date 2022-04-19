//Ben buraya card tasarimlarimi olusturacagim
//Card yapisini buraya alacagim
//Stilde hep card var bu ornek olabilir.

import React from 'react'
import { SafeAreaView, TouchableOpacity , View ,Text, Alert} from 'react-native'
import styles from './Card.style';

//Obur tarafta belirledigim title a erisim icin props.title buradan aliyorum
const Card = (props) => {
  return (
   
        <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.button_container} onPress={() => Alert.alert('Merhaba')}>
            <Text style={styles.button_title}s>I LIKED</Text>
        </TouchableOpacity>
        </View>
  
  );
};

export default Card

//Cardlarimi appte tutuyorum orada belirleyip prop ile Carda aliyorum.

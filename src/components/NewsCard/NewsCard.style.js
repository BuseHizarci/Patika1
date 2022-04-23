import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightpink',
        margin:10,
        borderRadius:10,
        shadowOpacity:20,
    },
    image: { height: Dimensions.get('window').height /4  , borderTopLeftRadius:10,borderTopLeftRadius:10, },
    title: {fontSize:25 , fontWeight:'bold'},
    description: {color:'black' , marginTop:3,},
    inner_container : {
        padding:5,
    },
    author:{
        
        fontStyle:'italic',
        textAlign: 'right',
    }

})
export default styles;
//100-105 arasindakini gosteriyor ustte bes altta bes hazir bekliyor.
//190 load olmad
//2. de yuklerim 180. de yuklerim ama bunu nasil bilecegim ? 
//Key e ihtiyacim var diyor.  
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
    },
    bannerImage :{
        height: Dimensions.get('window').height / 5,
        width:Dimensions.get('window').width / 2,
    },
    headerText:{
        fontWeight:'bold',
        fontSize:50,
        
    }
})
export default styles;

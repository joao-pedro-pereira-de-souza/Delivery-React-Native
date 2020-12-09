import {StyleSheet} from 'react-native';
import {colors , ScreenWidth , ScreenHeight} from '../../styles'

export const styles = StyleSheet.create({
    container:{

        width: ScreenWidth * 0.40,
        height: ScreenHeight * 0.20, 
        borderRadius:7,
        overflow:"hidden",
        marginRight:8,
        marginVertical:5
        

    },
    containerText:{
        marginTop:6,
        marginLeft:6
    },
    button:{
        width:'60%',
        height: 35,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        position:"absolute",
        bottom:6,
        left:6
    
    }
})
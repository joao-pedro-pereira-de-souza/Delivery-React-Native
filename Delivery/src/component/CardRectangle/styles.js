import {StyleSheet} from 'react-native';
import {colors , ScreenWidth , ScreenHeight} from '../../styles'

export const styles = StyleSheet.create({
    container:{

        width: '100%',
        height: ScreenHeight * 0.28, 
        borderRadius:10,
        overflow:"hidden"

    },
    containerText:{
        marginTop:10,
        marginLeft:10
    },
    button:{
        width:'35%',
        height: 40,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        position:"absolute",
        bottom:10,
        left:10
    
    }
})
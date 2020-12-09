import { StyleSheet} from 'react-native'
import {ScreenHeight , sizeFonts} from '../../styles'

export const styles = StyleSheet.create({
    container:{

        width: '100%',
        padding: ScreenHeight *0.022,
      
        flexDirection:"row",
        justifyContent:"center",
        borderRadius: ScreenHeight * 0.020,

        marginVertical:5,
        
    },
    Input:{
        flex:1,
        marginLeft:7,
        fontSize:sizeFonts.label
    }
})
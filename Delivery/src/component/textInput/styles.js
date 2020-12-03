import { StyleSheet} from 'react-native'
import {ScreenHeight , sizeFonts} from '../../styles'

export const styles = StyleSheet.create({
    container:{

        width: '100%',
        padding: ScreenHeight *0.024,
      

        flexDirection:"row",
        justifyContent:"center",
        borderRadius: ScreenHeight * 0.008,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,

        marginVertical:5,
        
    },
    Input:{
        flex:1,
        marginLeft:7,
        fontSize:sizeFonts.label
    }
})
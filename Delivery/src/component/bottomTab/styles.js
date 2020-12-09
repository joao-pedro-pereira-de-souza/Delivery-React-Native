import {StyleSheet} from 'react-native'
import {colors , ScreenWidth , ScreenHeight} from '../../styles'

export const styles = StyleSheet.create({

    container:{
        
        alignItems:"center",

        justifyContent:"center",
        flexDirection:"row",
        justifyContent:"space-around",
        alignSelf:"center",

    },

    containerButtons:{

        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.12,
        backgroundColor: '#FAFAFA',
        borderRadius: ScreenHeight * 0.009,
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
    }


    
});
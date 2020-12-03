import { StyleSheet } from 'react-native';
import {ScreenHeight , ScreenWidth} from '../../styles'
export const styles = StyleSheet.create({
    
    container:{

        width: '100%',
        padding: ScreenHeight * 0.015,
        borderRadius: ScreenHeight * 0.008,

        alignItems:"center",
        justifyContent:"center",
        marginVertical:5,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,

    },

    title:{
        fontSize: ScreenWidth * 0.06,
        fontWeight:"bold",
    }

})
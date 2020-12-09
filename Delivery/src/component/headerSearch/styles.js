import {StyleSheet} from 'react-native'

import {colors , ScreenWidth , ScreenHeight} from '../../styles'

export const styles = StyleSheet.create({

    container:{
        width:'100%',
        flexDirection:"row",
        alignItems:"center"

    },
    containerInput:{

        width:'70%'

    },
    buttonFilter:{

       width:'14%',
       height:ScreenHeight * 0.08,
       backgroundColor: colors.green,
       alignItems:"center",
       justifyContent:"center",
       borderRadius: ScreenHeight * 0.01,
       marginLeft:10

    }
    
    
});
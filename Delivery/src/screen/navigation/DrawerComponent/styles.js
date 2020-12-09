import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';
import {colors} from '../../../styles'

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    containerAvatar:{
        width:'100%',
        height:160,
        backgroundColor:colors.green,
        alignItems:"center",
        flexDirection:"row"

    },
    avatar:{

        width:80,
        height:80,
        marginLeft:8,
        borderRadius:40,
        borderWidth:2,
        borderColor: '#fff',
        
    },
    containerTextAvatar:{
        marginLeft:10
    },
    containerItem:{
        marginTop:60
    },

    
});
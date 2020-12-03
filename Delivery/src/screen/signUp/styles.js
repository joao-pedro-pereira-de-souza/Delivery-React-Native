import {StyleSheet} from 'react-native';
import { ScreenHeight , ScreenWidth , colors} from '../../styles'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    buttonArrow:{

        width:40,
        height:40,
        backgroundColor:colors.green,
        borderRadius:20,

        alignItems:"center",
        justifyContent:"center",

        marginTop:40,
        marginLeft:10,
        

    },

    containerText:{
        marginLeft:20,
        marginTop:30,
        marginBottom:40

    },
    containerItens:{

        width: '90%',
        marginVertical:10,
        alignSelf:"center"

    },

    
    Button:{

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

    titleButton:{
        fontSize: ScreenWidth * 0.06,
        fontWeight:"bold",
    },

    containerRedes:{

        marginVertical:10,
        alignSelf:"center",
        flexDirection:"row",

    },

    buttomRede:{
        
        width:50,
        height:50,
        backgroundColor:'#FAFAFA',
        borderRadius:25,

        alignItems:"center",
        justifyContent:"center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginRight:16
    }
})
import {StyleSheet} from 'react-native'
import {colors , ScreenHeight , sizeFonts , ScreenWidth} from '../../styles'

export const styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:'#fff',    
    },

    containerTop:{
        width:'100%',
        height:'40%',
        backgroundColor: colors.green,

        borderBottomLeftRadius: ScreenHeight * 0.10 ,
        borderBottomRightRadius:ScreenHeight * 0.10 ,
        elevation:18,
        alignItems:"center"

    },

    containerLogo:{

        width:'50%',
        height: '20%',

        alignItems:"center",
        justifyContent:"center",

        backgroundColor: colors.green,
        marginTop:50,
        borderBottomRightRadius:20,
        borderTopLeftRadius:20,
        elevation:5

    },

    imgIlustation:{

        width: '70%',
        height:'70%',

        position:"absolute",
        bottom:-30,
    },

    containerItens:{

        width:'80%',
        marginTop:40,
        alignSelf:"center",

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
    }

})
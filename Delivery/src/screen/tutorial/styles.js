import {StyleSheet} from 'react-native'
import {ScreenHeight , colors} from '../../styles'
export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    //#region Styles Slide

    containerSlide:{

        width:'100%',
        height: '70%',
        backgroundColor: colors.grayLight,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        padding:10,
        overflow:"hidden"
    },
    containerSlideReder:{

        width:'100%',
        height: '60%',
        backgroundColor: colors.grayLight,
     
    },
    imgSlide:{
        width: 200,
        height:200,
        alignSelf:"center",
    },
    containerTextsSlide:{
        width:'100%',
        marginTop:8,
        marginLeft:5,
        text
        
    }, 
    ButtonNext:{
      marginRight:10,
     marginTop:20

    }

    //#endregion
});
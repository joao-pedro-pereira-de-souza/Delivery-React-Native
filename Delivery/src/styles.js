import {StyleSheet , Dimensions} from 'react-native'

export const {width:ScreenWidth , height: ScreenHeight} = Dimensions.get('window');

export const colors = {

    green:'#32ff7e',
    greenDark:'#3ae374',
    grey:'#4b4b4b',

}

export const sizeFonts ={

    extraTitle: ScreenHeight * 0.06,

    title: ScreenHeight * 0.04,
    label: ScreenHeight * 0.023,
    labelDesc: ScreenHeight * 0.01,
    
}

export const stylesFill = StyleSheet.create({

extraTitle:{

    fontSize: sizeFonts.extraTitle,
    fontWeight:"bold",

},
title:{

    fontSize: sizeFonts.title,
    fontWeight:"bold",
    
},
label:{
    fontSize:sizeFonts.label
}

})
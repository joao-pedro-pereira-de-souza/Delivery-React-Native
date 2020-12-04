import {StyleSheet} from 'react-native';
import {colors} from '../../styles'

export const styles = StyleSheet.create({

    container:{
        flex:1
    },

    containerBottom:{

        position:"absolute",
        bottom:0,
        width:'100%',
        height: '63%',
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

    },

    containerSlideItem:{

        marginVertical:10,
        alignSelf:"center",
        height:230,
        width:180,

        overflow:"hidden",
        borderRadius:8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,

    },

    containerImageSlide:{

        width:'100%', height:'65%'

    },
    containerIfonsSlide:{
        flex:1,
        backgroundColor: colors.grey
    },

    containerSlideInfosText:{
        marginTop:10,
        marginLeft:10,
        width:140,
    }, 



})
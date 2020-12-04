import {StyleSheet} from 'react-native';
import {colors} from '../../styles'

export const styles = StyleSheet.create({

    container:{
        flex:1
    },

    //#region ContainerTop
    containerTop:{

        padding:16,
        marginTop:30

    },
    containerTopLogo:{

        width:130,
        height:50,
        display:"flex",

        alignItems:"center",
        justifyContent:"center",

        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#32ff7e'

    },
    ToptitleLogo:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:20,


    },
    titleTop:{

        color:'#fff',
        fontWeight:"bold",
        fontSize:22,
        marginVertical:7,

    },
    separationTitleTop:{
        width:80,
        height:6,
        backgroundColor:'#fff',
        borderRadius:3

    },
    containerDescriptionTop:{

        width:260,
        marginVertical:10,

    },
    descriptionTop:{

        color:'#fff',
        fontSize:13,

    },

    Button:{
        width:120,
        height:40,
        marginVertical:10,
        backgroundColor:'#fff',
        display:"flex",

        alignItems:"center",
        justifyContent:"center",

        borderRadius:20,

    },
//#endregion

    containerBottom:{

        position:"absolute",
        bottom:0,
        width:'100%',
        height: '58%',
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

    },

    containerSlideItem:{

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

    containerButtonMore:{

        alignSelf:"center",
        alignItems:"center",
        marginTop:10

    },

    containerDrinks:{
        marginVertical:30
    }

})
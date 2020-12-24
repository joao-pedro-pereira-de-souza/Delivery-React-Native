import {StyleSheet} from 'react-native'
import {colors} from '../../../styles'
export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#fff',
        padding:20,
    },
    containerTop:{
        marginTop:20,
    },
    containerHeader:{
        marginTop:30,
    
    },
    containerQualification:{

        marginVertical:10,
        alignSelf:"center",
        flexDirection:"row"

    },
    buttonIcon:{
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.grayLight,
        borderRadius:6,
        marginBottom:8,
        elevation:2
    }, 
    containerListItens:{
        flexDirection:"row",
        flexWrap:"wrap",
        display:"flex",
        justifyContent:"center",
        marginVertical:18
    }
    
});
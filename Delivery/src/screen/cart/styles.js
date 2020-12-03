import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:'#fff'

    },
    containerItens:{

        marginTop:100,

    },
    containerRederItem:{
        
        width:'90%',
        height:60,
        flexDirection:"row",
        marginVertical:5,

        backgroundColor:'#FAFAFA',
        borderRadius:5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,

        alignSelf:"center",
        alignItems:"center"
        

    }
})
import React, {useRef , useState} from 'react';
import { View , FlatList , Image , Text , TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {database} from '../../services/api'

export default function cart() {

const [ref , setRef] = useState(false)

  const deleteItem = (index) => {
    
    //Delete - splice(inicio , quantidade de itens deletados)
    database.splice(parseInt(index) , 1)
   
    setRef(ref => !ref)// Reflesh FlatList

  }



  const rederItens = ({item , index}) => {

    return(
        
        <TouchableOpacity style={styles.containerRederItem} onPress={() => deleteItem(index)}>

          <Text>{item.title}</Text>

        </TouchableOpacity>

    )
    
  }
  
 return (

   <View style={styles.container}>

     <View style={styles.containerItens}>

          <FlatList
          data={database}
          extraData={ref}
          keyExtractor={(item) => String(item.id)}
          renderItem={rederItens}
          
          />

     </View>

   </View>
   
  );
}
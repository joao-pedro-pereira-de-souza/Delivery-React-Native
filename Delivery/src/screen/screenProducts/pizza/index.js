import React,{ useState} from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native';
import {styles} from './styles'

import { Entypo} from '@expo/vector-icons';

import {colors , stylesFill} from '../../../styles';

import Header from '../../../component/headerSearch/index';
import {useNavigation} from '@react-navigation/native'
import Tab from '../../../component/bottomTab/index'

import {database} from '../../../services/api'
import CardMini from '../../../component/CardSquare/index'
import CardRect from '../../../component/CardRectangle/index'

export default function pizza() {
  
  const navigation = useNavigation();

  const RederItens = (item , index) => {

    console.log(index)
    
    if(item.id == 0 || item.id == 4 || item.id ==  6){
      return(
        <CardRect img={item.img}/>
      )
    }
    else{

      return(
        <CardMini img={item.img}/>
      )

    }
  }



 return (
   <ScrollView style={styles.container}>

        <View style={styles.containerTop}> 

            <TouchableOpacity style={styles.buttonIcon} onPress ={()=>  navigation.openDrawer()}>

                <Entypo name="menu" size={24} color={colors.green} />

            </TouchableOpacity>

            <View>
              
                    <Text style={[stylesFill.title , {color:colors.green}]}>Pizzas</Text>
                    <Text style={[stylesFill.label , {color:colors.grey}]}>Aproveite a refeição quentinha</Text>

            </View>

            <View style={styles.containerHeader}>

                <Header/>

            </View>

          </View>

          <View style={styles.containerQualification}>

                     
          <Tab id={0}/>

          </View>

          <View style={styles.containerListItens}>

          {database.map((item , index) =>{

          return RederItens(item , index)

          })}

          </View>


   </ScrollView>
  );
}
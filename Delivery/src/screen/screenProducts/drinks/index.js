import React,{ useState} from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native';
import {styles} from './styles'

import { FontAwesome5 , Entypo} from '@expo/vector-icons';

import {colors , stylesFill} from '../../../styles';

import Header from '../../../component/headerSearch/index';
import ButtonsOp from '../../../component/buttonCardOp/index';
import {useNavigation} from '@react-navigation/native'
import Tab from '../../../component/bottomTab/index'

import {Drinks} from '../../../services/api'
import CardMini from '../../../component/CardSquare/index'
import CardRect from '../../../component/CardRectangle/index'


const drinks = () => {

  
  const navigation = useNavigation();

  const RederItens = (item , index) => {

    console.log(index)
    
    if(item.id == 0 || item.id == 3 || item.id ==  6){
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
              
                    <Text style={[stylesFill.title , {color:colors.green}]}>Drinks</Text>
                    <Text style={[stylesFill.label , {color:colors.grey}]}>Aproveite a refeição quentinha</Text>

            </View>

            <View style={styles.containerHeader}>

                <Header/>

            </View>

          </View>

          <View style={styles.containerQualification}>
           
          <Tab id={1}/>

          </View>

          <View style={styles.containerListItens}>

          {Drinks.map((item , index) =>{

          return RederItens(item , index)

          })}

          </View>


   </ScrollView>
  );
}

export default drinks;
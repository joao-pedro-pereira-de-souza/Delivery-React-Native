import React from 'react';
import { View , TouchableOpacity , Text , Image} from 'react-native';
import {styles} from './styles';
import {stylesFill , colors} from '../../styles';
import Input from '../../component/textInput/index'

import { FontAwesome5 , Entypo , MaterialIcons , MaterialCommunityIcons , Ionicons , FontAwesome} from '@expo/vector-icons';

export default function signUp(props) {
 return (

   <View style={styles.container}>

    <TouchableOpacity style={styles.buttonArrow} onPress={() => props.navigation.navigate('signIn')}>

     <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
    
    </TouchableOpacity>

    <View style={styles.containerText}>

      <Text style={[stylesFill.extraTitle , {color: colors.green}]}>Register</Text>

      <Text style={[stylesFill.label , {color: colors.grey}]}>

        new register for user.

      </Text>

    </View>

    <View style={styles.containerItens}>

        <Input 
        Icon={FontAwesome5} 
        name='user-alt' 
        bg='#FAFAFA' 
        place='Email ou nome' 
        placeColor={colors.green} 
        iconColor={colors.green}/>

        <Input 
          Icon={Entypo} 
          name='lock' 
          bg= {colors.grayLight} 
          place='senha' 
          placeColor={colors.green} 
          iconColor={colors.green}/>


        <Input 
          Icon={FontAwesome} 
          name='id-card' 
          bg={colors.grayLight}
          place='CPF' 
          placeColor={colors.green} 
          iconColor={colors.green}/>


        <TouchableOpacity style={[styles.Button , {backgroundColor: colors.green}]}>

            <Text style={[styles.titleButton , {color:'#fff'}]}>Cadastrar</Text>

        </TouchableOpacity>

        <View style={styles.containerRedes}>

           <TouchableOpacity style={styles.buttomRede}>

              <MaterialCommunityIcons name="facebook" size={22} color={colors.green}/>

           </TouchableOpacity>

           <TouchableOpacity style={styles.buttomRede}>

              <Ionicons name="logo-google" size={22} color={colors.green} />

          </TouchableOpacity>


        </View>

    </View>

   </View>

  );
}
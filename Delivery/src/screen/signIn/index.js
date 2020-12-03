import React from 'react';
import { View , Image , Text , TouchableOpacity} from 'react-native';

import {styles} from './styles';
import { stylesFill , colors } from '../../styles';
import Input from '../../component/textInput/index';
import { FontAwesome5 , Entypo} from '@expo/vector-icons';

export default function signIn(props) {

 return (
   <View style={styles.container}>

     <View style={styles.containerTop}>

       <View style={styles.containerLogo}>

         <Text style={[stylesFill.title , {color:'#fff'}]}>
           Delivery
         </Text>

       </View>

       <Image style={styles.imgIlustation} source={require("../../image/Flat.png")} resizeMode='contain'/>

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
       bg='#FAFAFA' 
       place='senha' 
       placeColor={colors.green} 
       iconColor={colors.green}/>

      <TouchableOpacity style={[styles.Button, {backgroundColor: colors.green}]} onPress={() => props.navigation.navigate('screensDrawe')}>
        <Text style={[styles.titleButton , {color:'#fff'} ]}>logar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.Button, {backgroundColor: colors.greenDark}]} onPress={() => props.navigation.navigate('signUp')}>
        <Text style={[styles.titleButton , {color:'#fff'} ]}>Cadastro</Text>
      </TouchableOpacity>

     </View>

   </View>
  );
}
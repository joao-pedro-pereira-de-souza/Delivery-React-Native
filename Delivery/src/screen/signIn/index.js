import React,{useState} from 'react';
import { View , Image , Text , TouchableOpacity} from 'react-native';

import {styles} from './styles';
import { stylesFill , colors } from '../../styles';
import Input from '../../component/textInput/index';
import { FontAwesome5 , Entypo} from '@expo/vector-icons';
import Requisitions from '../../services/requisitions'
export default function signIn(props) {

  const [nameUser , setNameUser] = useState('');
  const [password , setPassword] = useState('');


  const SignIn = () =>{
    
     if( Requisitions.SignIn(nameUser , password)){

      props.navigation.navigate('screensDrawe') 

     }else{

      alert('Erro')

     }

    
  }

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
       iconColor={colors.green}
       value={nameUser}
       changeText={t => setNameUser(t)}
       
       />

      <Input 

       Icon={Entypo} 
       name='lock' 
       bg='#FAFAFA' 
       place='senha' 
       placeColor={colors.green} 
       iconColor={colors.green}
       value={password}
       changeText={t => setPassword(t)}
       securePassword={true}
       
       />

      <TouchableOpacity style={[styles.Button, {backgroundColor: colors.green}]} /*onPress={() => props.navigation.navigate('screensDrawe')}*/ onPress={SignIn}>
        <Text style={[styles.titleButton , {color:'#fff'} ]}>logar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.Button, {backgroundColor: colors.greenDark}]} onPress={() => props.navigation.navigate('signUp')}>
        <Text style={[styles.titleButton , {color:'#fff'} ]}>Cadastro</Text>
      </TouchableOpacity>

     </View>

   </View>
  );
}
import React,{useState} from 'react';
import { View , TouchableOpacity } from 'react-native';

import Input from '../inputTextRadius/index'
import {styles} from './styles'
import {colors} from '../../styles'

import { FontAwesome5 , Entypo , AntDesign} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Container } from './styles';

const headerSearch = () => {
    const [nameUser , setNameUser] = useState('');
  return (

        <View style={styles.container}>

            <View style={styles.containerInput}>

                <Input 
                  Icon={AntDesign} 
                  name='search1' 
                  bg='#FAFAFA' 
                  place='Search' 
                  placeColor={colors.green} 
                  iconColor={colors.green}
                  value={nameUser}
                  changeText={t => setNameUser(t)}
                
                />

            </View>

            <TouchableOpacity style={styles.buttonFilter}>

                <MaterialCommunityIcons name="filter-variant" size={24} color="#fff" />

            </TouchableOpacity>

        </View>
        
  );
}

export default headerSearch;
import React from 'react';
import { View , TextInput} from 'react-native';

import {styles} from './styles';
import {colors} from '../../styles'

export default function textInput(props) {
 return (

   <View style={[styles.container , { backgroundColor:props.bg } ]}>

      <props.Icon name={props.name} size={25} color={props.iconColor || colors.grey}/>

      <TextInput style={styles.Input} placeholder={ props.place } placeholderTextColor={props.placeColor} />

   </View>

  );
}
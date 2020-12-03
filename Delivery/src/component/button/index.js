import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View , Text , TouchableOpacity} from 'react-native';
import {styles} from './styles'

import {stylesFill} from '../../styles'
export default function button(props) {
 return (
   <TouchableOpacity style={[ styles.container, {backgroundColor: props.bg} ]} onPress={() => props.func}>

        <Text style={[styles.title , {color: props.color }]}>{props.text}</Text>

   </TouchableOpacity>
  );
}
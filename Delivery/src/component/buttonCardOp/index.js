import React from 'react';
import { Text , TouchableOpacity} from 'react-native';
import { styles } from './styles';

import {colors, stylesFill} from '../../styles'


const buttonCardOp = (props) => {

  const shadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  }

  return(

        <TouchableOpacity style={[styles.container , props.select ? shadow : { borderWidth: 0 } ]}>

            <props.Icon name={props.name} size={23} color={props.color}/>

            <Text style={[stylesFill.labelDesc , {color: props.color , fontWeight:"bold"}]}>{props.text}</Text>

        </TouchableOpacity>

  );
}

export default buttonCardOp;
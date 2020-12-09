import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View , ImageBackground , Text , TouchableOpacity} from 'react-native';
import {styles} from './styles'
import{stylesFill} from '../../styles'

const CardSquare = (props) => {
  return (

        <ImageBackground style={styles.container} source={props.img} resizeMode='cover' >

            <View style={styles.containerText}> 

                <Text style={ [stylesFill.label , {color:'#fff' , fontWeight: "bold" }]}>{props.title || 'Sem titulo'}</Text>

            </View>

            <TouchableOpacity style={styles.button}>
                <Text>Comprar</Text>
            </TouchableOpacity>

        </ImageBackground>

  );
}

export default CardSquare;
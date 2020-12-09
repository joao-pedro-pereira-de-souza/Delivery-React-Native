import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View , ImageBackground , Text , TouchableOpacity} from 'react-native';
import {styles} from './styles'
import{stylesFill} from '../../styles'

// import { Container } from './styles';

const CardRectangle = (props) => {
  return (

        <ImageBackground style={styles.container} source={props.img} resizeMode='cover' >

            <View style={styles.containerText}> 

                <Text style={ [stylesFill.title , {color:'#fff'}]}>{props.title || 'Sem titulo'}</Text>

            </View>

            <TouchableOpacity style={styles.button}>
                <Text>Comprar</Text>
            </TouchableOpacity>

        </ImageBackground>

  );
}

export default CardRectangle;
import React from 'react';
import { View , Image , Text, BackHandler } from 'react-native';

import { styles } from './styles';
import { stylesFill } from '../../../styles'

import { Entypo , Ionicons , FontAwesome} from '@expo/vector-icons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'

const DrawerComponent = (props) => {
  return (

    <DrawerContentScrollView {...props}>

        <View style={styles.container}>

          <View style={styles.containerAvatar}>

            <Image style={styles.avatar}/>

            <View style={styles.containerTextAvatar}> 

              <Text style={[stylesFill.label , {color:'#fff'}]}>Nome</Text>
              <Text style={[stylesFill.labelDesc , {color:'#fff'}]}>Cargo</Text>

            </View>
            
          </View>

          <View style={styles.containerItem}>

          <DrawerItem
            label='Home'

            labelStyle={
              {
                marginLeft:-10,
                color:'#4b4b4b'
              }
            }
            onPress= {() => props.navigation.navigate('Home')}
            icon={() => <Entypo name="home" size={25} color='#32ff7e'/>}
            
            />

            <DrawerItem
            label='User'

            labelStyle={
              {
                marginLeft:-10,
                color:'#4b4b4b'
              }
              }

              icon={() => <FontAwesome name="user" size={25} color="#32ff7e" />}
            
            />
            
            <DrawerItem
            label='Pizza'

            labelStyle={
              {
                marginLeft:-10,
                color:'#4b4b4b'
              }
              }
              onPress= {() => props.navigation.navigate('products')}
              icon={() => <Ionicons name="md-pizza" size={25} color="#32ff7e" />}

            
            />
             <DrawerItem
            label='bebidas'

            labelStyle={
              {
                marginLeft:-10,
                color:'#4b4b4b'
              }
              }

            icon={ () => <Entypo name="drink" size={25} color="#32ff7e" />}
 
            />

          <DrawerItem
            label='Sair'

            labelStyle={
              {
                marginLeft:-10,
                color:'#4b4b4b'
              }
              }
            onPress={() =>BackHandler.exitApp()}
            icon={ () => <Entypo name="log-out" size={25} color="#32ff7e" />}
 
            />

          </View>

        
        </View>

    </DrawerContentScrollView>


  )
}

export default DrawerComponent;
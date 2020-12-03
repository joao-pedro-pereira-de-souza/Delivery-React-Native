import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'

const DrawerComponent = () => {
  return (

    <DrawerContentScrollView>

        <View>

            <DrawerItem
            label='Home'
            
            />

            <DrawerItem
            label='Home'
            
            />
            
            <DrawerItem
            label='Home'
            
            />
        </View>

    </DrawerContentScrollView>


  )
}

export default DrawerComponent;
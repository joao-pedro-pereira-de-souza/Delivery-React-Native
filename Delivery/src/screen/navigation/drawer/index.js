import React from 'react';

import DrawerComponent from '../DrawerComponent/index'
import {createDrawerNavigator} from '@react-navigation/drawer'

import ScreenHome from '../../home/index'
import ScreenCart from '../../cart/index'

const drawer = () => {
  const Drawer = createDrawerNavigator();
  return(

    <Drawer.Navigator drawerContent={ props => <DrawerComponent {...props} />} >
      <Drawer.Screen name='Home' component={ScreenHome}/>
      <Drawer.Screen name='Cart' component={ScreenCart}/>
    </Drawer.Navigator>
 
  )
}

export default drawer;
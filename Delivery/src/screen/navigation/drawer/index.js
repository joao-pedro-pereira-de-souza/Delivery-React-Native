import React from 'react';

import DrawerComponent from '../DrawerComponent/index'
import {createDrawerNavigator} from '@react-navigation/drawer'

import ScreenHome from '../../home/index'
import ScreenCart from '../../cart/index'

import ScreenPizza from '../../screenProducts/pizza/index'
import ScreenDrinks from '../../screenProducts/drinks/index'
import ScreenMore from '../../screenProducts/more/index'

const drawer = () => {
  const Drawer = createDrawerNavigator();
  return(

    <Drawer.Navigator drawerContent={ props => <DrawerComponent {...props} />} >
      
      <Drawer.Screen name='Home' component={ScreenHome}/>
      <Drawer.Screen name='Cart' component={ScreenCart}/>
      <Drawer.Screen name='products' component={ScreenPizza}/>
      <Drawer.Screen name='drinks' component={ScreenDrinks}/>
      <Drawer.Screen name='more' component={ScreenMore}/>
      
    </Drawer.Navigator>
 
  )
}

export default drawer;
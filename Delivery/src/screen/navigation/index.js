import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenSignIn from '../signIn/index';
import ScreenSignUp from '../signUp/index';
import ScreensDrawer from './drawer/index';

import ScreenTutorial from '../tutorial/index';
export default function navigation() {

    const Stack = createStackNavigator();

 return (

   <NavigationContainer >

       <Stack.Navigator headerMode={false} initialRouteName='tutorial'>

        <Stack.Screen name='signIn' component={ScreenSignIn} />
        <Stack.Screen name='signUp' component={ScreenSignUp} />
        <Stack.Screen name='screensDrawe' component={ScreensDrawer}/>
        <Stack.Screen name='tutorial' component={ScreenTutorial}/>
       
        
       </Stack.Navigator> 

   </NavigationContainer>

  );
}
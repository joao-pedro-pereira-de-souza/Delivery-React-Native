import React,{useRef} from 'react';
import { View , ImageBackground , Text , Image} from 'react-native';
import {styles} from './styles';
import {stylesFill , ScreenWidth , colors} from '../../styles';

import Carousel from 'react-native-snap-carousel';
import {database} from '../../services/api'

export default function home() {

  const PizzaRef = useRef(null);

  const rederPizza = ({item , index}) => {

    return(

        <View style={styles.containerSlideItem}>

          <Image style={styles.containerImageSlide} source={item.img} resizeMode='cover'/>

          <View style={styles.containerIfonsSlide}>

            <View style={styles.containerSlideInfosText}>

              <Text style={[stylesFill.label , {color:'#fff', fontWeight:"bold"}]}> { item.title } </Text>

              <Text style={[stylesFill.labelDesc , {color:'#fff'}]}>

                {item.description}


              </Text>

             
            </View>

            <Text style=
              {[ 
               {

                  position:"absolute",
                  right:10,
                  bottom:10,
                  color:'#32ff7e',
                  fontSize:16,

               }]}> {item.value}</Text>

          </View>

        </View>

    )
    
  }
  
 return (
   <ImageBackground style={styles.container} source={require('../../image/bgHome.jpg')} blurRadius={2}>


     <View style={styles.containerBottom}>
 
       <Text style={[stylesFill.title , {marginVertical:20 , marginLeft:10, color: colors.green }]}>Pizza</Text>

       <View>

         <Carousel 
         ref={PizzaRef}
         data={database}
         renderItem={rederPizza}
         sliderWidth={ScreenWidth}
         itemWidth={180}
         keyExtractor={(item) => String( item.id) }
         inactiveSlideOpacity={1}
         firstItem={1}
         
         />

       </View>

     </View>

   </ImageBackground>
  );
}
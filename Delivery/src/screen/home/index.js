import React,{useRef} from 'react';
import { View , ImageBackground , Text , Image , TouchableOpacity , ScrollView} from 'react-native';
import {styles} from './styles';
import {stylesFill , ScreenWidth , colors} from '../../styles';
import { Feather } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import {database , Drinks} from '../../services/api'

export default function home() {

  const PizzaRef = useRef(null);
  const DrinkRef = useRef(null);

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


     <View style={styles.containerTop}>

      <View style={styles.containerTopLogo}>

            <Text style={styles.ToptitleLogo}>Delivery</Text>

        </View>

        <Text style={styles.titleTop}>Sobre</Text>

        <View style={styles.separationTitleTop}/>

        <View style={styles.containerDescriptionTop}>

            <Text  style={styles.descriptionTop}>
                Temos muitas lojas na região de são paulo, dando o melhor atendimento.
            </Text>

        </View>

        <TouchableOpacity style={styles.Button}>
            <Text style={{color:'#4b4b4b'}}>Saber mais</Text>
        </TouchableOpacity>

      </View>

      <ScrollView style={styles.containerBottom} showsVerticalScrollIndicator={false}>

      <Text style={[stylesFill.title , {marginTop: 28 , marginBottom:10, marginLeft:10, color: colors.green }]}>Pizza</Text>

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

      <TouchableOpacity style={styles.containerButtonMore}>

          <Text style={[stylesFill.label , { color: colors.grey} ]}>Ver Mais </Text>

          <Feather name="chevrons-down" size={35} color="#32ff7e" />

      </TouchableOpacity>

      <View style={styles.containerDrinks}>

      <Carousel 
      ref={DrinkRef}
      data={Drinks}
      renderItem={rederPizza}
      sliderWidth={ScreenWidth}
      itemWidth={180}
      keyExtractor={(item) => String(item.id)}
      inactiveSlideOpacity={1}
      firstItem={1}

      />

      </View>

      </ScrollView>

   </ImageBackground>
  );
}
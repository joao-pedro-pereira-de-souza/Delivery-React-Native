import React,{useRef , useState} from 'react';
import { View , ImageBackground , Text , Image , TouchableOpacity , ScrollView} from 'react-native';
import {styles} from './styles';
import {stylesFill , ScreenWidth , colors} from '../../styles';
import ComponentSwiper from '../../component/Swiper/index'
import Carousel from 'react-native-snap-carousel';
import {database , Drinks} from '../../services/api'

export default function home() {

  const PizzaRef = useRef(null);
  const DrinkRef = useRef(null);

  const options = [

    {
      status:'Todos'
    },
    {
      status:'Pizzas'
    },
    {
      status:'bebidas'
    },
    {
      status:'Sobrimesas'
    },
    {
      status:'marmitas'
    },
    
  ]

  const RederSlide = (item , i) =>{

    return(

       <View style={{width:100 , height:40 , backgroundColor:'#000'}}>

       </View>

    )

}

  const [status , setStatus] = useState('Todos')

  const setStausFilter = (status) =>{
    
    setStatus(status)

  }

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

    <View style={styles.containerBottom}>

    <ScrollView style={{marginTop:22}} showsVerticalScrollIndicator={false}>

      <View style={{width:'90%' , alignSelf:'center' , height:140 , marginBottom:10}}>

        <ComponentSwiper/>

      </View>

      <ScrollView horizontal style={{marginHorizontal:20 , marginVertical:10}} showsHorizontalScrollIndicator={false}>

      {options.map((e , i) =>{

            return(

              <TouchableOpacity 

              onPress={() =>setStausFilter(e.status)} 
              style={ [styles.btnOptions , status=== e.status && {backgroundColor:colors.green , borderWidth:0}]}>

                <Text style={[ {color: colors.grey} , status === e.status && {color:'#fff'}]}>{e.status}</Text>
                
              </TouchableOpacity>

            )

      })}

      </ScrollView>

      <Text style={[stylesFill.title , {marginTop: 15 , marginBottom:15, marginLeft:20, color:colors.grey , opacity:0.7 }]}>Pizza</Text>

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

      <View style={styles.containerDrinks}>

          <Text style={[stylesFill.title , {marginTop: 15 , marginBottom:15, marginLeft:20, color:colors.grey , opacity:0.7 }]}>Bebidas</Text>

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

    </View>

   </ImageBackground>
  );
}
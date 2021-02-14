import React from 'react';
import { View , Text , Image} from 'react-native';
import Swiper from 'react-native-swiper'
import {colors , stylesFill} from '../../styles'

const SwiperComponent = () => {

    const imgs = [

        {
            img: require('../../image/ilustationCartUser.png')
        },
        {
            img: require('../../image/pizza05Png.png')
        },
        {
            img: require('../../image/Flat.png')
        },


    ]

  return(
      <Swiper  autoplay
      autoplayTimeout={4}
      style={{ }}
      dotStyle={{
          backgroundColor:'#fff',
          width:13,
          height:13,
          borderRadius:13,
  
      }}
      activeDotColor={colors.greenDark}
      activeDotStyle={{

          width:25,
          height:13,
          borderRadius:13,
  
      }}>

          <View style={{width:'98%' , height:140 , borderRadius:10 , backgroundColor:colors.green , alignItems:'center' , justifyContent:'center' ,alignSelf:'center'}}>

              <View style={{width:'100%' , height:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>

              <View style={{width:'40%' , height:'100%' , justifyContent:'center' , marginHorizontal:5}}>

                <Text style={[stylesFill.title , { color:'#fff' , fontSize:15}]}>Melhores preços</Text>

                 <Text  style={[stylesFill.title , { color:'#fff' , fontSize:10 , marginTop:3}]}>Ipsum consequat ipsum sint incididunt laborum ex cupidatat consequat Lorem aliquip ut cillum.</Text>

                </View>

                <Image style={{width:'50%' , height:'90%'}} resizeMode='contain' source={imgs[0].img}/>


              </View>
          
          </View>

          <View style={{width:'98%' , height:140 , borderRadius:10 , backgroundColor:colors.green , alignItems:'center' , justifyContent:'center' , alignSelf:'center'}}>

              <View style={{width:'100%' , height:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>

              <View style={{width:'40%' , height:'100%' , justifyContent:'center' , marginHorizontal:5}}>

                <Text style={[stylesFill.title , { color:'#fff' , fontSize:15}]}>Pedaço em dobro</Text>

                 <Text  style={[stylesFill.title , { color:'#fff' , fontSize:10 , marginTop:3}]}>Ipsum consequat ipsum sint incididunt laborum ex cupidatat consequat Lorem aliquip ut cillum.</Text>

                </View>

                <Image style={{width:'50%' , height:'90%'}} resizeMode='contain' source={imgs[1].img}/>


              </View>
          
          </View>

          <View style={{width:'98%' , height:140 , borderRadius:10 , backgroundColor:colors.green , alignItems:'center' , justifyContent:'center' , alignSelf:'center'}}>

        <View style={{width:'100%' , height:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>

        <View style={{width:'40%' , height:'100%' , justifyContent:'center' , marginHorizontal:5}}>

        <Text style={[stylesFill.title , { color:'#fff' , fontSize:15}]}>Frete</Text>

        <Text  style={[stylesFill.title , { color:'#fff' , fontSize:10 ,  marginTop:3}]}>Ipsum consequat ipsum sint incididunt laborum ex cupidatat consequat Lorem aliquip ut cillum.</Text>

        </View>

        <Image style={{width:'50%' , height:'80%'}} resizeMode='contain' source={imgs[2].img}/>


        </View>

        </View>


      </Swiper>
  );
}

export default SwiperComponent;
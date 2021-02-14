import React from 'react';
import { View  , TouchableOpacity , Image , Text} from 'react-native';

import { styles } from './styles';
import AppIntrpSlide from 'react-native-app-intro-slider'
import {tutorialSilde} from '../../services/api'
import { colors , stylesFill} from '../../styles';

const tutorial = (props) => {

    const Reder = ({item}) =>{

        return(

            <View style={styles.containerSlideReder}>

                <Image source={item.img} resizeMode='contain' style={styles.imgSlide}/>

                <Text style={[ stylesFill.title , {color: colors.greenDark}]}>{item.title}</Text>

                <View style={styles.containerTextsSlide}>

                  <Text style={stylesFill.label}>{item.text}</Text>
               
                </View>

            </View>

        )

    }

    const RederButtonNext = () =>{
        return(
            <TouchableOpacity style ={styles.ButtonNext}>

                <Text>Next</Text>

            </TouchableOpacity>
        )
    }
    const RederButtonDone = () =>{
        return(
            <TouchableOpacity style ={styles.ButtonNext} onPress={() =>props.navigation.navigate('signIn')}>

                <Text>Done</Text>

            </TouchableOpacity>
        )
    }

  return(

        <View style={styles.container}>

            <View style={styles.containerSlide}>

                    <AppIntrpSlide 
                    data={tutorialSilde}
                    renderItem={Reder}
                    dotStyle={{backgroundColor:colors.grey}}
                    
                    activeDotStyle={{backgroundColor:colors.green, width:40}}
                    
                    renderDoneButton={RederButtonDone}

                    />
                    
            </View>
            
        </View>

    );
}

export default tutorial;
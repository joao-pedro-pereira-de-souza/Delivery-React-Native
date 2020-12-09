import React, {useState , useEffect} from 'react';
import { View  , TouchableOpacity , Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { FontAwesome5 , Entypo , MaterialCommunityIcons} from '@expo/vector-icons';

import {styles} from './styles'
import { colors, stylesFill } from '../../styles';

// import { Container } from './styles';

const bottomTab = ({id}) => {

    const navigation = useNavigation();

    const [pizza , setPizza] = useState(false);
    const [drinks , setDrinks] = useState(false);
    const [more , setMore] = useState(false);

    useEffect(()=>{

      ActiveButton(id)
    
    }, []);

    const ShowNavigate = (id) =>{

        if(id == 0){

            navigation.navigate('products')

        } else if(id == 1){

            navigation.navigate('drinks')

        } else if(id == 2){
            navigation.navigate('more')
        }

    }

    const ActiveButton = (idButton) =>{

        switch (idButton) {
            case 0:

                setPizza(true)
                setDrinks(false)
                setMore(false)
                
                break;

                case 1:

                    setPizza(false)
                    setDrinks(true)
                    setMore(false)
                    
                    break;

                    case 2:

                        setPizza(false)
                        setDrinks(false)
                        setMore(true)
                        
                        break;
        
            default:


                break;
        }

    }

    const shadow = {
        shadowColor: 'red',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4
        }
      }
    
  return (

      <View style={styles.container}>

          <TouchableOpacity onPress={() => ShowNavigate(0)} style={[styles.containerButtons , pizza ? shadow : {}]}>
              <FontAwesome5 name='pizza-slice' color={ pizza ? colors.green : colors.grey} size={25}/>
              <Text style={[stylesFill.labelDesc , {fontWeight:"bold" , color: pizza ? colors.green : colors.grey}]}>Pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => ShowNavigate(1)} style={[styles.containerButtons , drinks ? shadow : {}]}>
              <Entypo name='drink' color={ drinks ? colors.green : colors.grey} size={25}/>
              <Text style={[stylesFill.labelDesc , {fontWeight:"bold" , color: drinks ? colors.green : colors.grey}]}>Drinks</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => ShowNavigate(2)} style={[styles.containerButtons , more ? shadow : {}]}>
              <MaterialCommunityIcons name='more' color={ more ? colors.green : colors.grey} size={25}/>
              <Text style={[stylesFill.labelDesc , {fontWeight:"bold" , color: more ? colors.green : colors.grey}]}>Outros</Text>
          </TouchableOpacity>

      </View>

  );
}

export default bottomTab;
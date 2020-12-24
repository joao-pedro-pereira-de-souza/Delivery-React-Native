import img01 from '../image/pizza01.jpg';
import img02 from '../image/pizza02.jpg';
import img03 from '../image/pizza03.jpg';
import img04 from '../image/pizza04.jpg';
import img05 from '../image/pizza01.jpg';

import img06 from '../image/juice.jpg';
import img07 from '../image/beer.jpg';
import img08 from '../image/soda.jpg';
import img09 from '../image/whisky.jpg';
import img10 from '../image/wine.jpg';

import imgErro from '../image/image-gallery.png'

import ilus01 from '../image/ilustationCartUser.png'
import ilus02 from '../image/ilustrationCard.png'
import ilus03 from '../image/ilustrationCardMoney.png'

export const database = [

    {
         
        id:0,
        img: img01,
        title:'Pizza Mini',
        description: 'uma boa pizza para comer entre 2 pessoas',
        value: 'R$ 16,00'
    },
    { 
        id:1,
        img: img02,
        title:'Pizza Tradicional',
        description: 'Pizza mais pedida',
        value: 'R$ 22,00',
    },
    {
        id:3,
        img: img03,
        title:'Pizza Grande',
        description: 'uma boa pizza para comer entre 5 pessoas',
        value: 'R$ 25,00'
    },
    {
        id:4,
        img: img04,
        title:'Pizza Familia',
        description: 'uma boa pizza para comer entre 7 pessoas',
        value: 'R$ 29,00'
    },
    {
        id:5,
        img: img05,
        title:'Pizza em pedaço',
        description: 'uma boa pizza para comer sozinho',
        value: 'R$ 10,00'
    },
]

export const databaseUser = [

  {
      id:0,
      name:'jp',
      email:'jppereiradesouza29@gmail.com',
      senha: 'joao123',
      
  }
]


export const Drinks = [
    {
        id:0,
        img: img06,
        title:'Sucos',
        value: 'R$ 8,00'
    },
    {
        id:1,
        img: img07,
        title:'Cervejas',
        value: 'R$ 4,00',
    },
    {
        id:2,
        img: img08,
        title:'Refrigerantes',
        value: 'R$ 5,00'
    },
    {
        id:3,
        img: img09,
        title:'Wiscky',
        value: 'R$ 130,00'
    },
    {
        id:4,
        img: img10,
        title:'vinho',
        value: 'R$ 140,00'
    },
]

export const tutorialSilde = [
    {
        img: ilus01,
        title:'Combo carrinho',
        text: 'Quis laborum est est veniam ex velit non. Dolore velit laboris velit magna ex ut nostrud esse eiusmod aute voluptate.'
    },

    {
        img: ilus02,
        title:'Combo carrinho',
        text: 'Quis laborum est est veniam ex velit non. Dolore velit laboris velit magna ex ut nostrud esse eiusmod aute voluptate.'
    },

    {
        img: ilus03,
        title:' cupons de desconto.',
        text: 'Quis laborum est est veniam ex velit non. Dolore velit laboris velit magna ex ut nostrud esse eiusmod aute voluptate.'
    },



]

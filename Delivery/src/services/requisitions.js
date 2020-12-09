
import {databaseUser} from './api'

export default {

  SignIn: (name , senha) =>{

    let validation = false;

    databaseUser.forEach(e =>{

      if(e.name == name){

          if(e.senha == senha){

            validation = true;
          
          }
      
        }

    })
    return validation


  }

}

import {databaseUser} from './api'

export function SignIn(name , senha){

  if(databaseUser.indexOf(name) > -1){

      if(databaseUser.indexOf(senha) > -1){

         return true

      }

      break;
  }

}
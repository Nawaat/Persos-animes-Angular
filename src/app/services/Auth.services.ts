//on importe le Décorateur qui marque une classe comme disponible pour être fournie et injectée en tant que dépendance.
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

/**on importe le model People */

import { User } from "../models/User";

import { Observable, Subscription } from "rxjs";


//decorateur injectable injecteur qui permet de rendre les dependances accessibles dans toute l'appli

@Injectable({

    /**On specifie que le service est accessible en root cad dans tout les modules*/
  
    providedIn: 'root'
  
  })


  /**
 * cette class servira à envoyer des requetes à l'API
 */


export class AuthService {

 /**
   * Injection de l'object http de type httpClient dans le constructeur
   * Cet objet permet d'envoyer des requette avec get/post/put etc...
   */
  constructor(private http: HttpClient) { }

isLoggedIn: boolean = false


logIn(data: any) {

let User= this.http.post('http://localhost:4000/User/signIn',data)

return User

}


  signUp(data: any){

    return this.http.post('http://localhost:4000/User/createUser',data)

  }


//methode qui permet de recuperer le token stocker ne local stroga
isLogged(): boolean {

  /**recuperer la valeur du token stocker dans le LS si elle existe il renvoie (true) 
  * Sinon si le local storage est vide il renvoie Null donc False
  */
  const token = localStorage.getItem('token')
  console.log(token);

  //not not transforme la variable token en boolean pour qu'il renvoie soit true soit false
  return !! token
}

}


//on importe le Décorateur qui marque une classe comme disponible pour être fournie et injectée en tant que dépendance.
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

/**on importe le model People */

import { Perso } from "../models/Perso";

import { Observable, Subscription } from "rxjs";


//decorateur injectable injecteur qui permet de rendre les dependances accessibles dans toute l'appli

@Injectable({

  /**On specifie que le service est accessible en root cad dans tout les modules*/

  providedIn: 'root'

})

/**
 * cette class servira à envoyer des requetes à l'API
 */


export class PersoService {

  url: string = 'http://localhost:4000'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  /**
   * Injection de l'object http de type httpClient dans le constructeur
   * Cet objet permet d'envoyer des requette avec get/post/put etc...
   */
  constructor(private http: HttpClient) {
    this.httpOptions.headers =
    this.httpOptions.headers.set('Authorization', 'Authorization ' + localStorage.getItem('token'));
  }


  /** la methode permet d'envoyer la requette qui vient de l'api*/
  getAllPersos() {

    return this.http.get(this.url + '/Perso/afficheLesPersos', this.httpOptions)
  }

  
  getOne(id: any) {

    return this.http.get(this.url + '/Perso/GetOne/' + id, this.httpOptions)

  }


  AddPerso(data: any) {

    return this.http.post(this.url + '/Perso/createPerso', data, this.httpOptions)
  }


  deletePerso(id: any) {

    return this.http.delete(this.url + '/Perso/deletePerso/' + id, this.httpOptions)
  }


  updatePerso(id: any, data: any) {

    return this.http.put(this.url + '/Perso/updatePerso/' + id, data, this.httpOptions)
  }



}
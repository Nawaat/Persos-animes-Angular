
//on importe le Décorateur qui marque une classe comme disponible pour être fournie et injectée en tant que dépendance.
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

/**on importe le model People */

import { Anime } from "../models/Anime";

import { Observable, Subscription } from "rxjs";


//decorateur injectable injecteur qui permet de rendre les dependances accessibles dans toute l'appli

@Injectable({

  /**On specifie que le service est accessible en root cad dans tout les modules*/

  providedIn: 'root'

})

/**
 * cette class servira à envoyer des requetes à l'API
 */


export class AnimeService {

  /**
   * Injection de l'object http de type httpClient dans le constructeur
   * Cet objet permet d'envoyer des requette avec get/post/put etc...
   */
  constructor(private http: HttpClient) {
  }


  /** la methode permet d'envoyer la requette qui vient de l'api*/
  getAllAnimes() {

    // la HttpClient.get()méthode pour récupérer les données d'un serveur.

    return this.http.get('http://localhost:4000/Anime/AfficheAllAnimes')
  }

}
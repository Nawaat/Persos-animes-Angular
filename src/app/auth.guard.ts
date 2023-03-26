import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../app/services/Auth.services'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private AuthServices: AuthService) { }

  canActivate() {

    //stocker dans une variable la methode is logged qui est dans les services pour savoir si je suis connecter 
    let TokenLocalStorage = this.AuthServices.isLogged()
    console.log(TokenLocalStorage);

    if (TokenLocalStorage) {
      return true
    }

    //retour a la page d'authentification
    return this.router.navigate(['authentification'])
  }

}

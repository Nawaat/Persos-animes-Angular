import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePersosComponent } from './liste-persos/liste-persos.component';
import { ListeAnimesComponent } from './liste-animes/liste-animes.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DetailsPersoComponent } from './details-perso/details-perso.component';
import{AuthGuard} from '../app/auth.guard'

const routes: Routes = [
  { path: 'liste-persos', component: ListePersosComponent, canActivate:[AuthGuard] },
  { path: 'liste-animes', component: ListeAnimesComponent, canActivate:[AuthGuard]  },
  { path: 'Perso/:id', component: DetailsPersoComponent, canActivate:[AuthGuard]  },
  { path: 'authentification', component: AuthentificationComponent},
  { path: '', component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

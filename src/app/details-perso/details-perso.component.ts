import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perso } from '../models/Perso';
import { ListePersosComponent } from '../liste-persos/liste-persos.component';

import { PersoService } from '../services/Persos.service';


@Component({
  selector: 'app-details-perso',
  templateUrl: './details-perso.component.html',
  styleUrls: ['./details-perso.component.css']
})
export class DetailsPersoComponent implements OnInit {

// @Input()

 Perso: any 
 id:any
//  name: any
//  id_anime: any

  constructor(private PersoService: PersoService, private routeur : ActivatedRoute ) { }

  ngOnInit(): void {

    //on va chercher dans notre service routeur la valeur initial: snapshot, paramMAp: liste parametre  
   const id: any = this.routeur.snapshot.paramMap.get('id')
     console.log(id);

      this.PersoService.getOne(id).subscribe(Perso => {
      this.Perso = Perso;
      
      console.log(Perso);

  })
}

}

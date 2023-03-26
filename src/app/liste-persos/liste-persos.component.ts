import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersoService } from '../services/Persos.service';
import { AnimeService } from '../services/Animes.service';
import { __values } from 'tslib';
import { Perso } from '../models/Perso';
import { faCircleChevronRight, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-liste-persos',
  templateUrl: './liste-persos.component.html',
  styleUrls: ['./liste-persos.component.css']
})
export class ListePersosComponent implements OnInit {

  faCircleChevronRight = faCircleChevronRight;
  faTrashCan = faTrashCan;
  faPen = faPen;

@Input()

  image: any
  name: any
  result: any
  animes: any
  add: any
  id: any
  id_anime: any

  constructor(private PersoService: PersoService, private AnimeService: AnimeService) {

  }

  ngOnInit() {

    this.PersoService.getAllPersos().subscribe(result => { 
      this.result = result;

      this.AnimeService.getAllAnimes().subscribe(animes => {
        this.animes = animes;
      });

    });

  }

  selectPerso(id: any, name: any, id_anime: any, image: any) {

    this.id = id;
    this.name = name;
    this.id_anime = id_anime;
    this.image = image

  }

  AddPerso(value: any) {

    let body = {

      image: value.image,
      name: value.name,
      id_anime: value.id_anime

    }

    this.PersoService.AddPerso(body).subscribe(add => {
     
      // this.ngOnInit();
      location.reload();

    });

  }

  deletePerso(id: any) {

    this.PersoService.deletePerso(id).subscribe(del => {

      console.log(del);

      this.ngOnInit();

    });

  }

  GetOnePerso(onePerso: any) {

    this.PersoService = onePerso

    console.log(onePerso);


    // this.PersoService= onePerso
  }



  UpdatePerso(value: any) {

    let body = {

      image: value.image,
      name: value.name,
      id_anime: value.id_anime

    }
    
    this.PersoService.updatePerso(this.id, body).subscribe(result => {

      // this.ngOnInit();
      location.reload();

    });

  }

}

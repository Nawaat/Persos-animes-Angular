import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/Animes.service';

@Component({
  selector: 'app-liste-animes',
  templateUrl: './liste-animes.component.html',
  styleUrls: ['./liste-animes.component.css']
})
export class ListeAnimesComponent implements OnInit {

  result:any

  constructor(private AnimeService: AnimeService) { }

  ngOnInit(){

    this.AnimeService.getAllAnimes().subscribe(result=>{

      console.log(result);
      this.result = result;
})    

}

 

}
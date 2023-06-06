import { Component } from '@angular/core';
import { Heroe } from 'src/app/models/heroes.interface';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  listarHeroes: Heroe[] = [];

  constructor(
    private heroeServices: HeroeService
  ){
    this.listarHeroes = this.heroeServices.getListarHeroes();
  }
}

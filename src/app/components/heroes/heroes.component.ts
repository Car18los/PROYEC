import { Component } from '@angular/core';
import { Heroe } from 'src/app/models/heroes.interface';
import { HeroeService } from 'src/app/services/heroe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  listarHeroes: Heroe[] = [];

  constructor(
    private heroeServices: HeroeService,
    private router:Router
  ){
    this.listarHeroes = this.heroeServices.getListarHeroes();
    console.log(this.listarHeroes)
  }
  selectedCard(id:number){
    console.log(id)
    this.router.navigate(['/detalle',id]);
    
  }
}

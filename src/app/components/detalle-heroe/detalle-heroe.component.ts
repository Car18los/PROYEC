import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';
@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent {
  heroe:any={};

  constructor( 
    private ActiveRoute:ActivatedRoute,
    //private router:Router,
    private HeroeServices:HeroeService
    ){
      this.ActiveRoute.params.subscribe(params =>{
       // console.log(params['id']);
       this.heroe = this.HeroeServices.getVerHeroe(params['id']);
       console.log(this.heroe);
    })
  
  }

}

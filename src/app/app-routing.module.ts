import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';
import { PageErrorComponent } from './components/shared/page-error/page-error.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'heroes' , component: HeroesComponent
  },
  {
    path: 'detalle/:id' , component: DetalleHeroeComponent
  },
  {
    path: '**' , component:PageErrorComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

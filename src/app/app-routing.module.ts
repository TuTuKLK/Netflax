import { InfoComponent } from './components/info/info.component';
import { ListeFilmsComponent } from './components/liste-films/liste-films.component';
import { ActeursComponent } from './components/acteurs/acteurs.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'acceuil', component:HomeComponent},
  {path:'films',component:FilmsComponent},
  {path:'info',component:InfoComponent},
  {path:'genre',component:ListeFilmsComponent},
  {path:'acteurs',component:ActeursComponent},
  {path:'info/:id', component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

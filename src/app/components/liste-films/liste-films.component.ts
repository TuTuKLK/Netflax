import { DatabaseService } from 'src/app/services/database.service';
import { IFilm } from 'src/app/interface/film.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.scss']
})
export class ListeFilmsComponent implements OnInit {
  private _selectedFilmsGenre?:any[]

  public films:IFilm[]=[];
  public filmsGenre:string[]=[];
  public pageIndex:number = 0;
  public get filteredFilms():IFilm[]{
    return (this._selectedFilmsGenre && this._selectedFilmsGenre.length>0)? this.films.filter(f=>this._selectedFilmsGenre?.map(s=>s.Title).includes(f.Title)) : this.films
  }
  public get paginedFilms():IFilm[]{
    return this.filteredFilms.slice(this.pageIndex * this.pageTotal,(this.pageIndex+1) * this.pageTotal)
  }
  public pageTotal:number = 10;

  constructor(private _api:DatabaseService) { }

  ngOnInit(): void {
    this._api.getMovies().subscribe(res=>this.films=res);
    this._api.getLabels().subscribe(res=>this.filmsGenre=res);
  }
public nextPage():void{
  if(this.pageTotal * (this.pageIndex+1) < this.filteredFilms.length){
    this.pageIndex++
  }else{
    this.pageIndex = Math.floor(this.filteredFilms.length/this.pageTotal)
  }
}
public genre(event:any){
  console.log(event);
  this._api.getFilmsGenre(event.target.value).subscribe(res=>this._selectedFilmsGenre=res);
  this.pageIndex = 0;
}

}

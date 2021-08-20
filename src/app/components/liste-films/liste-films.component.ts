import { DatabaseService } from 'src/app/services/database.service';
import { IFilm } from 'src/app/interface/film.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.scss']
})
export class ListeFilmsComponent implements OnInit {
  public selectedFilmsGenre:any[] = []

  public films:IFilm[]=[];
  public filmsGenre:string[]=[];
  public pageIndex:number = 0;
  public urlPicture = "https://image.tmdb.org/t/p/w500";
  public pictureNotFound = "assets/notMovies.jpg";

  public get filteredFilms():IFilm[]{
    return (this.selectedFilmsGenre && this.selectedFilmsGenre.length>0)? this.films.filter(f=>this.selectedFilmsGenre?.map(s=>s.Title).includes(f.Title)) : this.films
  }
  public get paginedFilms():IFilm[]{
    return this.filteredFilms.slice(this.pageIndex * this.pageTotal,(this.pageIndex+1) * this.pageTotal)
  }
  public pageTotal:number = 10;

  public embedTrailer(url:string){
    return url.replace('watch?v=', 'embed/')
  }







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
public previousPage():void{
  if(this.pageTotal * (this.pageIndex+1) < this.filteredFilms.length &&(this.pageIndex+1)>=0){
    this.pageIndex--
  }else{
    this.pageIndex = Math.floor(this.filteredFilms.length/this.pageTotal)
  }
}
public genre(event:any){
  this._api.getFilmsGenre(event.target.value).subscribe(res=>this.selectedFilmsGenre=res);
  this.pageIndex = 0;
}
public getPage(event:any){
  const temp = [...this.filteredFilms];
  this.pageTotal = event.rows;
  const start = event.page * event.rows;
  this.films = temp.splice(start,event.rows);
}

}

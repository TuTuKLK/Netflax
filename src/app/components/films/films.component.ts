import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { materialize } from 'rxjs/operators';
import { IFilm } from 'src/app/interface/film.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  public filmsAll: any;
  public alpha:boolean = true;
  public films: IFilm[] | undefined;
  public trailerNotFound = "https://www.youtube.com/embed/dQw4w9WgXcQ&ab_channel=RickAstley";
  public urlPicture = "https://image.tmdb.org/t/p/w500";
  public pictureNotFound = "assets/notMovies.jpg";
  public genre: string = "";
  public labels: any;
  
  constructor(private dataBaseService: DatabaseService) {}

  public pageSize = 10

public embedTrailer(url:string){
  return url.replace('watch?v=', 'embed/')
}

public byFilmGenre(genre:string){}

  ngOnInit(): void {
  
    this.dataBaseService.getMoviesNotAlpha().subscribe((res:any)=>{
      this.filmsAll = res;
      const temp = [...this.filmsAll]
      this.films = temp.slice(0,10);
    });
  
  this.labels = this.dataBaseService.getLabels()
  this.labels.subscribe((arg:any) =>console.log(arg));
  
  }
  public chooseGenre(label:string){
    this.byFilmGenre(label)
  }
  
  //*********PAGINATOR************************** */
  public getPage(event:any){
    const temp = [...this.filmsAll];
    this.pageSize = event.rows;
    const start = event.page * event.rows;
    this.films = temp.splice(start,event.rows);
  }

}

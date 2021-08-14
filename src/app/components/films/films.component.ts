import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { IFilm } from 'src/app/interface/film.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  public filmsAll: any;
  public films: IFilm[] | undefined;
  public notFound = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"

  constructor(private dataBaseService: DatabaseService) {}

  ngOnInit(): void {
    this.filmsAll = this.dataBaseService.getMovies();
    this.dataBaseService.getMovies().subscribe((res:any)=>{
      this.films = res.splice(0,10);
      console.log(this.films);
    });
    // this.dataBaseService.getMovieByName("star wars").subscribe(res=>console.log(res));
  }
}

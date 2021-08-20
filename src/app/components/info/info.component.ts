import { IFilm } from './../../interface/film.interface';
import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, interval, zip, Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public id: any;
  public movies: any;
  public movie: any;
  public genre: any;
  public actors:any
  public activatedRoute: any

  public trailerNotFound = "https://www.youtube.com/embed/dQw4w9WgXcQ&ab_channel=RickAstley";
  public urlPicture = "https://image.tmdb.org/t/p/w500";
  public pictureNotFound = "assets/notMovies.jpg";

  constructor(
    private dataBaseService: DatabaseService, 
    private _route:ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router
    ) { }
    public embedTrailer(url:string){
      return url.replace('watch?v=', 'embed/')
    }
    

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.id=params.id);
    console.log(this.id)

    
    // ***************Movie from ID movie******************
    this.dataBaseService.getMovieByID(this.id).subscribe((res:IFilm) => {this.movie = res;console.log(this.movie)});
    // ***************Label from ID movie******************
    this.dataBaseService.getGenreID(this.id).subscribe((res) => {this.genre = res;console.log(this.genre)});
    // ***************Actors from ID movie******************
    this.dataBaseService.getActorsID(this.id).subscribe((res) => {this.actors = res;console.log(this.actors)});
    

    
    





    
  }
}

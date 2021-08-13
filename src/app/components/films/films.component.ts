import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  public films: any;
  public notFound = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"

  constructor(private _http: DatabaseService) {}

  ngOnInit(): void {
    this.films = this._http.getMovies();
    this._http.getMovies().subscribe(res=>console.log(res));

    // this._http.getMovieByName("star wars").subscribe(res=>console.log(res));
  }
}

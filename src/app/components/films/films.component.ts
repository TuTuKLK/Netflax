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
  public films: IFilm[] | undefined;
  public trailerNotFound = "https://www.youtube.com/embed/dQw4w9WgXcQ&ab_channel=RickAstley";
  public urlPicture = "https://image.tmdb.org/t/p/w200";
  public pictureNotFound = "assets/notMovies.jpg";
  public genre: string = "";
  public labels: any;
  
  constructor(private dataBaseService: DatabaseService) {}

  public pageSize = 10

public embedTrailer(url:string){
  return url.replace('watch?v=', 'embed/')
}

public byFilmGenre(genre:string){
  this.dataBaseService.getFilmsGenre(genre).subscribe(res=>{
    this.filmsAll=res;
    // const resetPage={page:0, rows:this.pageSize, totalRecords:this.filmsAll.length,pageLinkSize:0, rowsPerPageOptions:[10, 20, 30]}
    // this.getPage(resetPage)
  })
}

  ngOnInit(): void {
    // this.filmsAll = this.dataBaseService.getMovies();
  
    this.dataBaseService.getMovies().subscribe((res:any)=>{
      this.filmsAll = res;
      const temp = [...this.filmsAll]
      this.films = temp.splice(0,10);
    });
  
  this.labels = this.dataBaseService.getLabels()
  this.labels.subscribe((arg:any) =>console.log(arg));
  
  }
  //*********PAGINATOR************************** */
  public chooseGenre(label:string){
    this.byFilmGenre(label)
  }

  public getPage(event:any){
    const temp = [...this.filmsAll]
    this.pageSize = event.rows
    const start = event.page * event.rows;
    this.films = temp.splice(start,event.rows);
    
    

    
    
    
  }
}

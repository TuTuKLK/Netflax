import { IFilm } from './../interface/film.interface';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter,tap, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _LocalURL: string ='http://localhost:3001/'

  public IDRandomHero(): number {
    return (Math.floor(Math.random() * 1000) + 1);
  }


  constructor(private _http : HttpClient) { }

  //********************ACTORS*************************************** */
  public getActors():Observable <any>{
    return this._http.get(`${this._LocalURL}actors`)
  }
  public getActorsID(id:number):Observable <any>{
    return this._http.get(`${this._LocalURL}actorsID/${id}`)
  }

  //********************MOVIES*************************************** */
  public getMovies():Observable <IFilm[]>{
    return this._http.get<IFilm[]>(`${this._LocalURL}films`)
  }
  // public getMovieByID(id:number):Observable <any>{
  //   const option : any = {params: new HttpParams().set('id', id)};
  //   return this._http.get(`${this._LocalURL}filmsid`,option)
  // }
  public getMovieByID(id:number):Observable <any>{
    return this._http.get(`${this._LocalURL}films/${id}`)
  }
  public getMoviesAlpha():Observable <IFilm[]>{
    return this._http.get<IFilm[]>(`${this._LocalURL}filmsAlpha`)
  }
  public getMoviesNotAlpha():Observable <IFilm[]>{
    return this._http.get<IFilm[]>(`${this._LocalURL}filmsNotAlpha`)
  }

  public getMovieBySelectedRow(start:number,end:number):Observable <any>{
    const params : HttpParams = new HttpParams().append('start', start).append('end', end);
    return this._http.get(`${this._LocalURL}films`,{params:params})
  }
  // public getMovieByName(name:string): Observable<any[]>{
  //   return this.getMovies().pipe(
  //     map((result:IFilm[])=>result.Title),
  //     map(result=>result.
  //       filter((res:any)=>res.Title===name)))
  // }
  public getMovieByName2(name:string):Observable<any> {
        return this._http.get(this._LocalURL+'search/'+name);
      }
  

  //****************************DIRECTORS***************************** */
  public getDirectors():Observable <any>{
    return this._http.get(`${this._LocalURL}directors`)
  }

  //****************************GENRE***************************** */
  public getLabels(): Observable <string[]>{
    return this._http.get<string[]>(`${this._LocalURL}genres`)
  }

  public getGenreID(id:number): Observable <string[]>{
    return this._http.get<string[]>(`${this._LocalURL}genresID/${id}`)
  }

  public getFilmsGenre(genre:string):Observable <any>{
    const option : any = {params: new HttpParams().set('genre', genre)};
    return this._http.get(`${this._LocalURL}filmsgenre`,option)
  }
}

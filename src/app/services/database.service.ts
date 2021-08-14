import { IFilm } from './../interface/film.interface';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  //********************MOVIES*************************************** */
  public getMovies():Observable <IFilm>{
    return this._http.get<IFilm>(`${this._LocalURL}films`)
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

  //****************************GENDERS***************************** */

  public getGenders():Observable <any>{
    return this._http.get(`${this._LocalURL}genders`)
  }
}

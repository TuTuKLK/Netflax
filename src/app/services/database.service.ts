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

  public getActors():Observable <any>{
    return this._http.get(`${this._LocalURL}actors`)
  }


  public getMovies():Observable <any>{
    return this._http.get(`${this._LocalURL}films`)
  }
  public getMovieByName(name:string): Observable<any[]>{
    return this.getMovies().pipe(
      map(result=>result.results),
      map(result=>result.
        filter((res:any)=>res.recordset.Title===name)))
  }
  public getMovieByName2(name:string):Observable<any> {
        return this._http.get(this._LocalURL+'search/'+name);
      }


  public getDirectors():Observable <any>{
    return this._http.get(`${this._LocalURL}directors`)
  }


  public getGenders():Observable <any>{
    return this._http.get(`${this._LocalURL}genders`)
  }
}

import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _LocalURL: string ='http://localhost:3001/'


  constructor(private _http : HttpClient) { }
  public getActors():Observable <any>{
    return this._http.get(`${this._LocalURL}actors`)
  }
  public getMovies():Observable <any>{
    return this._http.get(`${this._LocalURL}films`)
  }
  public getDirectors():Observable <any>{
    return this._http.get(`${this._LocalURL}directors`)
  }
  public getGenders():Observable <any>{
    return this._http.get(`${this._LocalURL}genders`)
  }
}

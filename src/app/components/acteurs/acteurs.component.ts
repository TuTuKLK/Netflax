import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {

  constructor(private _http:DatabaseService) { }

  ngOnInit(): void {
    this._http.getActors().subscribe(res=>console.log(res));

  }

}

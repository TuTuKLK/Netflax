import { IActor } from './../../interface/actor.interface';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {
  public actorsAll: any;
  public actors:IActor[]|undefined;
  public pageSize = 10;







  constructor(private dataBaseService:DatabaseService) { }

  ngOnInit(): void {
    // *************************all actors*************************
    this.dataBaseService.getActors().subscribe((res:any)=>{
      this.actors=res;
    })
    // *******************paginator all actors max page*************
    this.dataBaseService.getActors().subscribe((res:any)=>{
      this.actorsAll = res;
      const temp = [...this.actorsAll]
      this.actors = temp.splice(0,10);
    });

  }
    // ******************paginator all actors*************************
  public getPage(event:any){
    const temp = [...this.actorsAll];
    this.pageSize = event.rows;
    const start = event.page * event.rows;
    this.actors = temp.splice(start,event.rows);
  }

}

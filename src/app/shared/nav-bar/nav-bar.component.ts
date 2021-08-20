import { Component, OnInit } from '@angular/core';
import { Link } from './link';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public links: Link[];


  constructor() { 
    this.links = [];

  }

  ngOnInit(): void {
    this.links.push(new Link('Acceuil', '/'))
    this.links.push(new Link('Films', '/films'))
    this.links.push(new Link('Films par Genre', '/genre'))
    this.links.push(new Link('Acteurs', '/acteurs'))
    // this.links.push(new Link('Infos', '/info'))
  }

}

import { ActeursComponent } from './components/acteurs/acteurs.component';
import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer} from '@angular/platform-browser';
// import {flexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FilmsComponent } from './components/films/films.component';
import { UrlProtetPipe } from './shared/url-protet.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginatorModule} from 'primeng/paginator';
import { ListeFilmsComponent } from './components/liste-films/liste-films.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { InfoComponent } from './components/info/info.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    FilmsComponent,
    ActeursComponent,
    UrlProtetPipe,
    ListeFilmsComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    // MenuItem
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

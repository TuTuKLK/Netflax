import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlProtet'
})
export class UrlProtetPipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) {}

  transform(url: string): any {
    // return this.sanitize.bypassSecurityTrustUrl(url)
    return this.sanitize.bypassSecurityTrustResourceUrl(url)


  }

}

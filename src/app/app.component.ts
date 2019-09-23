import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzisquare';
  listo = false;

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
}

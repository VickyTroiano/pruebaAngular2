import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProyecto';
  urlImg = '../assets/img/montania-1280x795.png'; //Binding Property ejemplo 1. Del componente al DOM
}

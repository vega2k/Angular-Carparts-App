import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*아래와 같이 template 을 써서 직접 html 을 넣을 수 있다.
    template: `<h1>Angular App root component</h1>`,
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carPart = {
    'id': 1,
    'name': 'Super Tires',
    'description': 'These tires are the very bet',
    'inStock': 5
  };

  constructor() {
    console.log('AppComponent constructor called..');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rainbow';
  // colors = [
  //   //'#7d4138',
  //   'maroon',
  //   'red',
  //   'orangered',
  //   //'#ff8c00',

  //   'orange',
  //   '#FFD580',
  //   'yellow',
  //   'limegreen',
  //   'green',
  //   //'teal',
  //   //'#83A1CD',
  //   //'#00FFFF',
  //   '#96DED1',
  //   'blue',
  //   'indigo',
  //   //'purple',
  //   '#FF00FF',
  //   'violet',
  //   //'#FF6961',
  // ];
  colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  totalPx = 1000;

  get increment(): number {
    return this.totalPx / this.colors.length;
  }
}

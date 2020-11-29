import {Component} from '@angular/core';
import {Theme} from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-theme-creator-demo';
  theme = new Theme(230, 48, 47, 50, false);

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  favoriteSeason: string = this.seasons[0];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}

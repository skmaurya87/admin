import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   data =[ {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'},
   {"name":'John', "age":31, "city":'New York'}];
}

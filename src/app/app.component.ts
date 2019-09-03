import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = '';
  values = '';
  values1 = '';
  values2 = '';
  values3 = '';
  values4 = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];




  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  onKey1(event: KeyboardEvent) { // with type info
    this.values1 += (<HTMLInputElement>event.target).value + ' | ';
  }
  onKey2(value: string) { // with type info
    this.values2 += value + ' | ';
  }
  onEnter(value: string) {
    this.values3 = value;
   }
   update(value: string) {
     this.values4 = value;
   }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}

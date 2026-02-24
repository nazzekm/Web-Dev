/* 1
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>The user's name is {{ name() }}</p>`,
})
export class User {
  name = input<string>();
}
*/

/* 2
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>

    <ul>
      <li>
        Static Image:
        <img
          ngSrc="/logo.svg"
          alt="Angular logo"
          width="32"
          height="32"
        />
      </li>

      <li>
        Dynamic Image:
        <img
          [ngSrc]="logoUrl"
          [alt]="logoAlt"
          width="32"
          height="32"
        />
      </li>
    </ul>
  `,
})
export class User {
  username = 'Simran';
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
}
*/

/* 3
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h2>User works!</h2>
  `,
})
export class User {}
*/

/* 4
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h2>User Page</h2>
    <p>User works!</p>
  `,
})
export class User {}
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>

    <label for="framework">Favorite Framework:</label>
    <button (click)="showFramework()">show Framework</button>
    <input
      id="framework"
      type="text"
      [(ngModel)]="favoriteFramework"
    />
  `,
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';

  showFramework(){
    alert(this.favoriteFramework);
  }
}
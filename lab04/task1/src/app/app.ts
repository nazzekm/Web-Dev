/* 1
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `Hello Universe`,
  styles: [`
    :host {
      color: #a144eb;
    }
  `]
})
export class App {}
*/

/* 2
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
})
export class App {
  city = 'San Francisco';
}
*/

/* 3
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
  standalone: true
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
  standalone: true
})
export class App {}
*/

/* 4
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class App {
  isServerRunning = true;
}
*/

/* 5
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
})
export class App {
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
*/

/* 6
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [contentEditable]="isEditable">Edit me</div>`,
})
export class App {
  isEditable = true;
}
*/

/* 7
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class App {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
*/

/* 8
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  template: `<app-user name="Simran"></app-user>`,
})
export class App {}
*/

/* 9
import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  selector: 'app-root',
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>{{ message }}</p>
  `,
})
export class App {
  message = '';

  addItem(item: string) {
    this.message = item;
  }
}
*/

/* 10
import { Component } from '@angular/core';
import { Comments } from './comments';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comments],
  template: `
    <div>
      <h1>How I feel about Angular</h1>

      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }

    </div>
  `,
})
export class App {}
*/

/* 11
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  template: `
    <app-user></app-user>
  `,
})
export class App {}
*/

/* 12
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a href="/">Home</a> |
      <a href="/user">User</a>
    </nav>

    <router-outlet />
  `,
})
export class App {}
*/

/* 13
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a href="/">Home</a> |
      <a href="/user">User</a>
    </nav>

    <router-outlet />
  `,
})
export class App {}
*/

/* 14
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/user">User</a>
    </nav>

    <router-outlet />
  `,
})
export class App {}
*/

/* 15
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

      <input
        type="text"
        formControlName="name"
        name="name"
      />

      <input
        type="email"
        formControlName="email"
        name="email"
      />

      <button type="submit" [disabled]="!profileForm.valid">
        Submit
      </button>

    </form>

    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
})
export class App {

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' +
      this.profileForm.value.email
    );
  }
}
*/

/* 16
import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p>Car Listing: {{ display }}</p>`,
})
export class App {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐ ');
}
*/

/* 17
import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LowerCasePipe],
  template: `{{ username | lowercase }}`,
})
export class App {
  username = 'yOungTECH';
}
*/

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />

      <button type="submit" [disabled]="!profileForm.valid">
        Submit
      </button>

    </form>

    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' +
      this.profileForm.value.email
    );
  }
}
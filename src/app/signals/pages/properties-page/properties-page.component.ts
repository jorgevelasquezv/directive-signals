import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent{
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public counter = signal<number>(0);

  public userChangedEffect = effect(() => {
    console.log(`User changed to: ${this.user().email}, Counter: ${this.counter()}`);
  });

  public onFieldUpdated(field: keyof User, value: string): void {
    this.user.update((user) => {
      switch (field) {
        case 'email':
          user.email = value;
          break;
        case 'first_name':
          user.first_name = value;
          break;
        case 'last_name':
          user.last_name = value;
          break;
        case 'avatar':
          user.avatar = value;
          break;
        case 'id':
          user.id = Number(value);
          break;
      }
      return structuredClone(user);
    });
  }

  public increaseBy(value: number): void {
    this.counter.update((counter) => counter + value);
  }
}

import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter: WritableSignal<number> = signal(10);

  public squareCounter: Signal<number> = computed(
    () => this.counter() * this.counter()
  );

  public increaseBy(value: number): void {
    this.counter.set(this.counter() + value);
  }

  public reset(): void {
    this.counter.set(0);
  }
}

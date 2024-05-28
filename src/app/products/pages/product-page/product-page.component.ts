import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  private formBuilder = inject(FormBuilder);

  public color: string = 'purple';

  public productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  public changeColor(): void {
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}

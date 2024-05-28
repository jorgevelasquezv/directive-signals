import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private _color: string = 'red';

  private _errors?: ValidationErrors | null;

  constructor(private htmlElement: ElementRef<HTMLElement>) {
    htmlElement.nativeElement.innerHTML = 'This is a custom label';
  }

  ngOnInit() {
    this.setStyle();
  }

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrors();
  }

  private setStyle() {
    if (this._color) {
      this.htmlElement.nativeElement.style.color = this._color;
    }
  }

  private setErrors() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'This field is required';
      return;
    }
    if (errors.includes('minlength')) {
      const minLength = this._errors['minlength'].requiredLength;
      const actualLength = this._errors['minlength'].actualLength;
      this.htmlElement.nativeElement.innerText = `This field is too short. Min length is ${minLength}, but actual length is ${actualLength}`	;
      return;
    }
    if (errors.includes('maxlength')) {
      const maxLength = this._errors['maxlength'].requiredLength;
      const actualLength = this._errors['maxlength'].actualLength;
      this.htmlElement.nativeElement.innerText = `This field is too long. Max length is ${maxLength}, but actual length is ${actualLength}`	;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'This field is not an email';
    }
  }
}

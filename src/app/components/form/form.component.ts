import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input('formControl') toppings = new FormControl('');

  @Input() toppingList: string[] = ['Male', 'Female', 'Nonbinary', 'Other'];
}

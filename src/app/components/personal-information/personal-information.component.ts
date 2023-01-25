// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-personal-information',
//   templateUrl: './personal-information.component.html',
//   styleUrls: ['./personal-information.component.css']
// })
// export class PersonalInformationComponent {

// }
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}

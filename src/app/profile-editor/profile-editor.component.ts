import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateControlValue() {
    this.profileForm.patchValue({
      firstName: 'Yan Moe',
      lastName: 'Naing',
      address: {
        city: "Yesagyo"
      }
    });
  }
}

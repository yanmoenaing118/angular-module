import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  profile = this.fb.group({
    name: [''],
    email: [''],
    address: this.fb.group({
      street: [''],
      division: [''],
      city: [''],
      township: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {}
}

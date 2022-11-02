import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfigService } from '../config/config.service';


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

  no: number = 0;

  constructor(private fb: FormBuilder, private http: ConfigService) {
    this.no = 0;
  }

  ngOnInit(): void {
    fetch(
      'https://d2-olive-api.venuslab.co/api/v1.0.0/location/country?code=mm'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

      
  }

  onSubmit() {}
}

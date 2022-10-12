import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe(this.onNameChange);
  }

  onNameChange(value: any) {
    console.log(value);
  }

  resetName() {
    this.name.setValue('Yan Moe Naing');
  }
}

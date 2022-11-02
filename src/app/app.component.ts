import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const url = 'http://localhost:3000/api';

interface Person {
  name: string;
  age: number;
}

interface Res {
  status: number;
  message: string;
  data: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Learn Angular';
  persons: Array<Person> = [] || undefined;
  name = new FormControl('');
  age = new FormControl('');
  toDelete = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<Res>(`${url}/hello`).subscribe((res) => {
      this.persons = res.data;
    });
  }

  onSave(): void {
    this.http
      .post<Res>(`${url}/hello`, {
        name: this.name.value,
        age: this.age.value,
      })
      .subscribe((res) => {
        this.fetchData();
      });
  }

  deletePerson(): void {
    this.http.delete<Res>(`${url}/hello`, {
      params: {
        name: this.toDelete?.value!,
      },
    }).subscribe(res => {
      this.fetchData();
    })
  }
}

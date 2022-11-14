import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CastsServiceService {
  BAST_URL = 'http://localhost:3000/casts';

  constructor(private http: HttpClient) {}

  getActresses() {
    return this.http.get(this.BAST_URL);
  }

  getActressDetails(id: any) {
    return this.http.get(`${this.BAST_URL}/${id}`);
  }
}

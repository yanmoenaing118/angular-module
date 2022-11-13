import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGallery() {
    return this.http.get(this.BASE_URL + '/gallery', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getGalleryDetail(id: string | null) {
    return this.http.get(this.BASE_URL + '/gallery/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  createGallery(body: any) {
    return this.http.post(this.BASE_URL + '/gallery', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

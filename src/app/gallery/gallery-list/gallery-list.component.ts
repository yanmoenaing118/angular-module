import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GalleryService } from '../providers/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css'],
})
export class GalleryListComponent implements OnInit {
  gallery: any = [];

  galleryForm = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
  });

  constructor(
    private galleryService: GalleryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchGallery();
  }

  fetchGallery() {
    this.galleryService.getGallery().subscribe((res) => (this.gallery = res));
  }


  createGallery() {
    console.log('gallery', this.galleryForm.value);
    this.galleryService.createGallery(this.galleryForm.value)
    .subscribe(res => {
      if(res) {
        this.fetchGallery();
      }
    })
  }
}

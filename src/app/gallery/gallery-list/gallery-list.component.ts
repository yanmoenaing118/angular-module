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

  galleryForm: any = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
    file: [''],
    fileSource: [null],
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

  onFileChoose(event: any) {
    this.galleryForm.patchValue({
      fileSource: event.target.files[0],
    });
  }

  createGallery() {
    // console.log('gallery', this.galleryForm.value);

    const formData: any = new FormData();

    for (let key in this.galleryForm.value) {
      formData.append(key, this.galleryForm.value[key]);
    }

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    this.galleryService
      .createGallery(formData)
      .subscribe((res) => {
        if (res) {
          this.fetchGallery();
        }
      });
  }
}

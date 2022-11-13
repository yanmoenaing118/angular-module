import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../providers/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css'],
})
export class GalleryListComponent implements OnInit {
  gallery: any = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.fetchGallery();
  }

  fetchGallery() {
    this.galleryService.getGallery().subscribe((res) => (this.gallery = res));
  }
}

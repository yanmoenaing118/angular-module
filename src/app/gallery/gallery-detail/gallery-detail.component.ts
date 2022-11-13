import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../providers/gallery.service';

interface GalleryDetails {
  id: string | null;
  image: string | null;
  title: string | null;
  description: string | null;
}
@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
})
export class GalleryDetailComponent implements OnInit {
  galleryId: string | null = '';
  galleryDetail: GalleryDetails | any;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchGalleryDetail();
  }

  fetchGalleryDetail() {
    this.route.paramMap.subscribe((params) => {
      this.galleryId = params.get('id');
    });
    this.galleryService.getGalleryDetail(this.galleryId).subscribe((res) => {
      this.galleryDetail = res;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

@NgModule({
  declarations: [GalleryListComponent,GalleryDetailComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}

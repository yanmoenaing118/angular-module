import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

@NgModule({
  declarations: [GalleryListComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}

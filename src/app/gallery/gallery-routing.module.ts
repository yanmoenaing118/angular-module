import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryListComponent,
  },
  {
    path: "gallery/:id",
    component: GalleryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CastDetailComponent } from './cast-detail/cast-detail.component';
import { CastListComponent } from './cast-list/cast-list.component';

const routes: Routes = [
  {
    path: 'casts',
    component: CastListComponent,
  },
  {
    path: 'casts/:id',
    component: CastDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastsRoutingModule {}

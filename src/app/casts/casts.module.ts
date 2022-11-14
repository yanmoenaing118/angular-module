import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastListComponent } from './cast-list/cast-list.component';
import { CastDetailComponent } from './cast-detail/cast-detail.component';
import { CastsRoutingModule } from './casts-routing.module';
import { CastsServiceService } from './providers/casts-service.service';



@NgModule({
  declarations: [CastListComponent, CastDetailComponent],
  imports: [CommonModule, CastsRoutingModule],
  providers: [CastsServiceService],
})
export class CastsModule {}

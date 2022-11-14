import { Component, OnInit } from '@angular/core';
import { CastsServiceService } from '../providers/casts-service.service';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css'],
})
export class CastListComponent implements OnInit {
  actresses: any = [];

  constructor(private actressService: CastsServiceService) {}

  ngOnInit(): void {
    this.fetchActresses();
  }

  fetchActresses() {
    this.actressService
      .getActresses()
      .subscribe((res) => (this.actresses = res));
  }


}

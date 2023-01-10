import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  canEdit: boolean = false;
  message: string  = "You cannot edit me";


  constructor(private logger: LoggerService) {}

  toggleEdit() {
    this.logger.log('User toggled canEdit')
    this.canEdit = !this.canEdit;
    if(this.canEdit) {
      this.message = "You can edit me"
    } else {
      this.message = "You cannot edit me"
    }
  }

  saveMessage() {
    this.logger.log('User save message');
  }

}

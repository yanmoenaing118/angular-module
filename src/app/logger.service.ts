import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  messages: string[] = [];

  constructor() {}

  log(message: string) {
    console.log(message || 'An action happened.');
    this.messages.push(message || `There was an unkonw action at ${new Date().toLocaleString()}`)
  }
}

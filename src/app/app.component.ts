import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About Us', url: '/folder/Inbox', icon: 'information-circle' },
    { title: 'Submit a Ticket', url: '/folder/Outbox', icon: 'pricetag' },
    { title: 'Contact Us', url: '/folder/Favorites', icon: 'mail' },
  ];
  constructor() {}
}

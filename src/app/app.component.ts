import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: "Home", url: '', icon: 'home' },
    { title: "I'm a Contractor", url: 'contractor-form', icon: 'build' },
    { title: 'Contact Us', url: 'contact-form', icon: 'mail' },
    { title: 'Submit a Ticket', url: 'customer-form', icon: 'pricetag' },
  ];
  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Route-Demo';

  homeRoute = '';
  settingsRoute = 'settings';

  routes = [
    {linkName: 'menu1', url: 'Menu-1'},
    {linkName: 'menu2', url: 'Menu-2'},
    {linkName: 'menu3', url: 'Menu-3'}
    
  ];
}



import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home-landing></app-home-landing>`
})
export default class HomePage {}

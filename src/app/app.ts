import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Benefits } from './components/benefits/benefits';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Benefits,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),
    new Quote ('eric','mike','shglsk'),

  ];


  constructor() { }

  ngOnInit() {
  }

}

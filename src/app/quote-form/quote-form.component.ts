import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  name:string;
  author:string;
  quote:string;
  createdby:string;
  published:Date;

  //myQuote = new Quote ('','','','',new Date);
  @Output() addQuote = new EventEmitter<Quote>();
  showQuote: any;
  upvotes: any;
  downvotes: any;
   
  submitQuote(){
    const myQuote = {
      name: this.name,
      author: this.author,
      quote: this.quote,
      createdby: this.createdby,
      published: this.published,
      upvotes:0,
      downvotes:0,
      showQuote: false
    }
    this.addQuote.emit(myQuote)
  }

  constructor() { }

  ngOnInit() {
  }

}

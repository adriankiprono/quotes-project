import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote ('eric','mike','shglsk','',new Date (1974 ,4, 7)),
    new Quote ('eric','mike','shglsk','',new Date ()),
    new Quote ('eric','mike','shglsk','',new Date ()),
    new Quote ('eric','mike','shglsk','',new Date ()),
   


  ];
  addNewQuote(quote:Quote){
    // let quoteLength = this.quotes.length;
    // quote.id =quoteLength+1;
    this.quotes.push(quote)
  }
  toggleQuote(index){
    this.quotes[index].showQuote =!this.quotes[index].showQuote;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }  


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit ,Input} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote ('quote','carl segan','For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring. Carl Sagan','csar',new Date (1974 ,4, 7),),
    new Quote ('quote','carl segan','For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring. Carl Sagan','csar',new Date ()),
    
   


  ];
  @Input() quote:Quote[]
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
  mostLikes(index){
    const votes= [];
    this.quotes.forEach(quote => votes.push(quote.upvotes));
    if (this.quotes[index].upvotes===Math.max(...votes)){
      return true;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}

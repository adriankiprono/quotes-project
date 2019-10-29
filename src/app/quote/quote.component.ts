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
    new Quote ('quote','Albert Einstein','Life is like riding a bicycle. To keep your balance you must keep moving. ','csar',new Date (1923,3,5)),
    
   


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
  get mostVotes(){
    return this.quotes.sort((n,m) =>{
      return<any>new Date (n.upvotes)-<any> new Date (m.upvotes);
    });

  }
   get topMost(){
    for (let quote of this.quotes){
      if(this.quotes.indexOf(quote)===0 && quote.upvotes>0){
        return quote.name
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}

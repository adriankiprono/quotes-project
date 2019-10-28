export class Quote {
    showQuote:boolean;
  upvotes: number;
  downvotes: number;
    constructor(public name: string,public author: string,public quote: string ,public createdby:string , public published:Date ){
        this.showQuote=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}

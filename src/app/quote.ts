export class Quote {
    showQuote:boolean;
    constructor(public name: string,public author: string,public quote: string ,public createdby:string , public published:Date ){
        this.showQuote=false;
    }
}

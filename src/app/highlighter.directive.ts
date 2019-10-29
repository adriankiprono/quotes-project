import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el:ElementRef) {  }
  highlighterElement(){
    this.el.nativeElement.style.border= '8px solid black';
    this.el.nativeElement.style.color= 'blue';
    this.el.nativeElement.style.boxshadow= 'red';

    

  }
  ngOnInit (): void{

  }

}

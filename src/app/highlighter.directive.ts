import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
m
  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color= 'yellow';
    
   }
    
    

  }
  
  



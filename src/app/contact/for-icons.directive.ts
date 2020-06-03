import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForIcons]'
})
export class ForIconsDirective {

  constructor(private el: ElementRef) { 

  }

  @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.fontSize = '3.2em';
  }
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.fontSize = '3em';
  }

}
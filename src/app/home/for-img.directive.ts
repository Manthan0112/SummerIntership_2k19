import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appForImg]'
})
export class ForImgDirective {

  constructor(private el: ElementRef) {
    
   }

   @HostListener('mouseenter') onmouseenter(){
     this.el.nativeElement.style.flex = '20em';
       }

  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.flex = '1';
      }

}

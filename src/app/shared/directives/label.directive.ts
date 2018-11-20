import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[margoLabel]'
})
export class LabelDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.addClass(el.nativeElement, 'margo-label');
  }

}

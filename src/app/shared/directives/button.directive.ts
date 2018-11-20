import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[margoButton]'
})
export class ButtonDirective implements OnInit {

  @Input()
  color = 'margo';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'margo-button');
    this.renderer.addClass(this.el.nativeElement, 'margo-button-' + this.color);
  }

}

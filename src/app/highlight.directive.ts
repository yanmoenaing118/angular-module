import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseenter') MouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseout') MouseOut() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

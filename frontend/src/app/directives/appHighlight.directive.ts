import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}

// Usage - highlight text in a certain color. Pass color value as input
// <p appHighlight="#ffff00">This text will be highlighted in yellow</p>

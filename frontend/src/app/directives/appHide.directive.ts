import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHide]',
  standalone: true
})
export class HideDirective implements OnInit {
  @Input('appHide') hide!: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.hide) {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}

// Usage - accepts a boolean value as an input to hide or show an element.
// <p appHide="shouldHide">This paragraph will be hidden if shouldHide is true</p>

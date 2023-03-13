import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  standalone: true
})
export class ConfirmDirective {
  @Input('appConfirm') message!: string;

  constructor() {}

  @HostListener('click', ['$event'])
  confirmFirst() {
    const confirmed = confirm(this.message);

    if (!confirmed) {
      event!.preventDefault();
    }
  }
}

// Usage - display a confirmation dialog when a user clicks on a button.
//         pass message as an input to the directive.
// <button appConfirm="Are you sure you want to delete this item?" (click)="deleteItem()">Delete</button>


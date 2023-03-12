import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(3000, style({ opacity: 1 })),
        animate('2s ease-in-out', style({ transform: 'translateY(-20px)' })),
        animate('2s ease-in-out', style({ transform: 'translateY(50px)' })),
        animate('2s ease-in-out', style({ transform: 'translateY(-20px)' })),
        animate('2s ease-in-out', style({ transform: 'translateY(50px)' })),
        animate('2s ease-in-out', style({ transform: 'translateY(0px)' }))
      ]),
    ]),
    ],
  })
export class PageNotFoundComponent {

}

import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/models/song.model';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fade', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease')
      ]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate('250ms ease', style({ opacity: 0 })))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public song: Song;

  @Input()
  public index: number;

  constructor() { }

  ngOnInit(): void {
  }

}

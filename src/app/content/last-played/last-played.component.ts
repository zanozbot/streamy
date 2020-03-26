import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Song } from 'src/models/song.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  styleUrls: ['./last-played.component.scss'],
  animations: [
    // the fade-in animation.
    trigger('fade', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease')
      ])
    ])
  ]
})
export class LastPlayedComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  public get lastSongs$(): Observable<Song[]> {
    return this.playerService.getLastSongs$();
  }

}

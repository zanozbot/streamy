import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Station } from 'src/models/station.model';
import { stations } from 'src/data/stations.data';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent implements OnInit {

  public stations: Station[] = stations;

  /**
   * Controls the extension of the navigation
   */
  public isExtended: boolean;

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

  /**
   * A helper function to get current station
   */
  public get currentStation(): Station {
    return this.playerService.getStationValue();
  }

}

import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Station } from 'src/models/station.model';
import { stations } from 'src/data/stations.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

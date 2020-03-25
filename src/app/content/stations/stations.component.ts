import { Component, OnInit } from '@angular/core';
import { stations } from 'src/data/stations.data';
import { Station } from 'src/models/station.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  public stations: Station[] = stations;

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

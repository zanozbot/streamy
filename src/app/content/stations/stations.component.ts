import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { stations } from 'src/data/stations.data';
import { Station } from 'src/models/station.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit, AfterViewInit {

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

  /**
   * After the view initializes this checks for the currently selected
   * station and puts it into view
   */
  ngAfterViewInit(): void {
    const selected = document.getElementsByClassName('selected');
    if (selected.length > 0) {
      selected[0].scrollIntoView(false);
    }
  }

}

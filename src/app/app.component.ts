import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Station } from 'src/models/station.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  /**
   * Controls the extension of the navigation
   */
  public navExtended: boolean;

  /**
   * All of the available stations
   * Replace this with your links
   */
  public stations: Station[] = [
    {
      name: 'Osrednje slovenska',
      stream: 'http://stream.radioaktual.si/Aktual',
      lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual'
    },
    {
      name: 'Obala',
      stream: 'http://stream.radioaktual.si/AktualO',
      lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual-osrednja'
    },
    {
      name: 'Studio D',
      stream: 'http://stream.radioaktual.si/AktualD',
      lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual-osrednja'
    },
    {
      name: 'Dalmacija',
      stream: 'http://stream.radioaktual.si/AktualDalmacija'
    },
    {
      name: 'Latino',
      stream: 'http://stream.radioaktual.si/AktualLatino'
    }
  ];

  /**
   * Currently selected station
   */
  public selectedStation: Station;

  /**
   * Audio element
   */
  public player: HTMLAudioElement;

  /**
   * Initialize station
   */
  ngOnInit(): void {
    this.selectedStation = this.stations[0];
  }

  /**
   * Gets the reference to the audio element inside of a timeout function
   * to prevent ExpressionChangedAfterItHasBeenCheckedError
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.player = document.getElementById('player') as HTMLAudioElement;
      this.player.play();
    }, 0);

  }

  /**
   * Changes the selected station and resets player
   *
   * @param station Selected station
   */
  public changeStation(station: Station) {
    this.selectedStation = station;
    this.player.src = station.stream;
    this.player.play();
  }

  /**
   * Toggles the play time
   */
  public togglePlayer() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

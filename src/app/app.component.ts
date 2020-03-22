import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Station } from 'src/models/station.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public navExtended: boolean;

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

  public selectedStation: Station;

  public player: HTMLAudioElement;

  ngOnInit(): void {
    this.selectedStation = this.stations[0];
  }

  ngAfterViewInit(): void {
    this.player = document.getElementById('player') as HTMLAudioElement;
    this.player.play();
  }

  public changeStation(station: Station) {
    this.selectedStation = station;
    this.player.pause();
    this.player.src = station.stream;
    this.player.play();
  }

  public togglePlayer() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

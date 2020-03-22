import { Injectable } from '@angular/core';
import { stations } from 'src/data/stations.data';
import { BehaviorSubject } from 'rxjs';
import { Station } from 'src/models/station.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  /**
   * Audio element
   */
  private player: HTMLAudioElement;

  /**
   * Currently selected station
   */
  private station$: BehaviorSubject<Station>;

  /**
   * Initialize the station
   */
  constructor() {
    this.station$ = new BehaviorSubject<Station>(stations[0]);
  }

  /**
   * Initializes the player
   * 
   * @param player Audio player object
   */
  public initPlayer(player: HTMLAudioElement) {
    this.player = player;
    this.player.src = this.station$.getValue().stream;
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

  /**
   * Changes the selected station and resets player
   *
   * @param station Selected station
   */
  public changeStation(station: Station) {
    this.station$.next(station);
    this.player.src = station.stream;
    this.player.play();
  }

  /**
   * Return true when our player exists and is playing
   */
  public isPlaying(): boolean {
    return this.player && !this.player.paused;
  }

  /**
   * Returns currently selected station
   */
  public getStationValue(): Station {
    return this.station$.value;
  }

}

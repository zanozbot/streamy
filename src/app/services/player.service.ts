import { Injectable } from '@angular/core';
import { stations } from 'src/data/stations.data';
import { BehaviorSubject, Observable, timer, of, race } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Station } from 'src/models/station.model';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/models/song.model';
import { SHOUTcast } from 'src/models/shoutcast.model';
import * as moment from 'moment';

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
   * Holds the returned data from an API
   */
  private lastSongs$: Observable<Song[]>;

  /**
   * Initialize the station
   */
  constructor(private http: HttpClient) {
    this.station$ = new BehaviorSubject<Station>(this.getStationFromLocalStorage());

    // Responsible for polling data from the API every two minutes
    this.lastSongs$ = race(timer(0, 60 * 2 * 1000), this.station$).pipe(
      switchMap(() =>
        this.http.get<any>(this.station$.getValue().lastSongsPath).pipe(
          // If you API return the array of object wrapped into data
          map(res => res.data),
          // Since the data is not in the correct format we pass each element
          // into the function to correct it
          map(res => res.filter(song => song.author)),
          // If we get an error we return an empty array
          catchError(() => of([]))
        ))
    );
  }

  /**
   * Transforms SHOUTcast row into our own Song model
   *
   * @param element SHOUTcast row
   */
  private transformSHOUTcastToSong(row: SHOUTcast): Song {
    const authorAndTitle = row.title.split(' - ');
    const author = authorAndTitle[0];
    const title = authorAndTitle[1];
    const time = moment.unix(row.playedat).local().format('H:mm');

    const song = {
      title,
      author,
      time
    };

    return song;
  }

  /**
   * Returns the last songs obserable
   */
  public getLastSongs$(): Observable<Song[]> {
    return this.lastSongs$;
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
    this.saveStationToLocalStorage(station);
    this.player.src = station.stream;
    this.player.play();
  }

  /**
   * Returns the last selected station from local storage
   * or first one from your list
   */
  private getStationFromLocalStorage(): Station {
    const station = localStorage.getItem('streamy_current_station');
    if (station) {
      return JSON.parse(station);
    } else {
      return stations[0];
    }
  }

  /**
   *  Saves the currently selected station to local storage
   *
   * @param station Selected station
   */
  private saveStationToLocalStorage(station: Station) {
    localStorage.setItem('streamy_current_station', JSON.stringify(station));
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

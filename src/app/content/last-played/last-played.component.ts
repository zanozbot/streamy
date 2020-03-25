import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Song } from 'src/models/song.model';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  styleUrls: ['./last-played.component.scss']
})
export class LastPlayedComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  public get lastSongs$(): Observable<Song> {
    return this.playerService.getLastSongs$();
  }

}

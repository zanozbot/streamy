import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {

  @ViewChild('player')
  private player: ElementRef;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  /**
   * Gets the reference to the audio element inside of a timeout function
   * to prevent ExpressionChangedAfterItHasBeenCheckedError
   */
  ngAfterViewInit(): void {
    // const player = document.getElementById('player') as HTMLAudioElement;
    setTimeout(() => this.playerService.initPlayer(this.player.nativeElement), 0);
  }

}

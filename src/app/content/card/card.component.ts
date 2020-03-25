import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/models/song.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public song: Song;

  @Input()
  public index: number;

  constructor() { }

  ngOnInit(): void {
  }

}

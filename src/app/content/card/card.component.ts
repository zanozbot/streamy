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

  public link: string;

  constructor() { }

  ngOnInit(): void {
    // Preparing the right format for YouTube
    const query = `${this.song.author.trim()} - ${this.song.title.trim()}`;
    this.link = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }

}

import { Component, OnInit } from '@angular/core';
import { notFoundText } from 'src/data/content.data';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public notFoundText: string = notFoundText;

  constructor() { }

  ngOnInit(): void {
  }

}

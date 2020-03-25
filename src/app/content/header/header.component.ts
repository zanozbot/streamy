import { Component, OnInit } from '@angular/core';
import { appName } from 'src/data/content.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public appName: string = appName;

  constructor() { }

  ngOnInit(): void {
  }

}

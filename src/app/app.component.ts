import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { GlobalService } from './services/global/global.service';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-sentiment-dashboard';

  constructor(
    public global: GlobalService,
    public store : StoreService
    ) {
  }

}

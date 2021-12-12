import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'tweets-section',
  templateUrl: './tweets-section.component.html',
  styleUrls: ['./tweets-section.component.scss']
})
export class TweetsSectionComponent implements OnInit {

  constructor(
    public store : StoreService
  ) { }

  ngOnInit(): void {
  }

}

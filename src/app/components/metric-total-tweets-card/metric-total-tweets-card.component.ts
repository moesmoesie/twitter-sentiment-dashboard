import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'metric-total-tweets-card',
  templateUrl: './metric-total-tweets-card.component.html',
  styleUrls: ['./metric-total-tweets-card.component.scss']
})
export class MetricCardComponent implements OnInit {
  constructor(
    public store : StoreService
  ) { }

  ngOnInit(): void {
  }

}

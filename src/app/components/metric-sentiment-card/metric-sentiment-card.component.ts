import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-metric-sentiment-card',
  templateUrl: './metric-sentiment-card.component.html',
  styleUrls: ['./metric-sentiment-card.component.scss']
})
export class MetricSentimentCardComponent implements OnInit {

  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

}

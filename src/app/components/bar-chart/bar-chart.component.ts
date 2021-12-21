import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        title: {
          text: ""
        }
      },
      title: {
        display: true,
        text: 'Tweets per Sentiments'
      }
    }
  };
  public barChartLabels: string[] = ['Positive', 'Neutral', 'Negative'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];



  get_data(): ChartDataset[] {
    if (!this.store.sentiment_count) return []
    return [
      {
        data: [
          this.store.sentiment_count?.positief,
          this.store.sentiment_count?.neutraal,
          this.store.sentiment_count?.negatief,
        ],
        label: "Amount",
        backgroundColor: [
          '#cbb6f0',
          '#7F39FB',
          '#23036A'
        ],

        hoverBackgroundColor: [
          '#cbb6f0',
          '#7F39FB',
          '#23036A'
        ],
      }
    ]
  }

  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

}

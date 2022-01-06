import { Component, OnInit,Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Tweet } from 'src/app/interfaces/tweet';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() tweets : Tweet[] = [];

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
    if (this.tweets.length == 0) return []
    var posCount = 0
    var neutraal = 0
    var negatief = 0

    this.tweets.forEach((element) => {
      if(element.sentiment == "positief"){
        posCount++
      }else if(element.sentiment == "negatief"){
        negatief++
      }else{
        neutraal++
      }
    })

    return [
      {
        data: [
          posCount,
          neutraal,
          negatief,
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

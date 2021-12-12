import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metrics-section',
  templateUrl: './metrics-section.component.html',
  styleUrls: ['./metrics-section.component.scss']
})
export class MetricsSectionComponent implements OnInit {
  headerText = "Metrics"
  constructor() { }

  ngOnInit(): void {
  }

}

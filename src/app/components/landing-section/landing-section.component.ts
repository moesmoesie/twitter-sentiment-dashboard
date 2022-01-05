import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {
  subTitleText = "Human Computer Interaction"
  headerText = "Twitter Sentiment Dashboard"
  bodyText = "Explore the internets view by at-a-glance positive/neutral/negative tweet sentiment analysis, filter data with custom search operations, and export your newly found insights to a local csv file."


  constructor() { }

  ngOnInit(): void {
  }

}

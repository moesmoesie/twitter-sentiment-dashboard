import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {
  subTitleText = "Human Computer Interaction"
  headerText = "Twitter Sentiment Dashboard"
  bodyText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates ut amet, magni nihil totam beatae autem asperiores, cumque nam assumenda qui aperiam commodi culpaillo minima unde tempore, esse earum?"


  constructor() { }

  ngOnInit(): void {
  }

}

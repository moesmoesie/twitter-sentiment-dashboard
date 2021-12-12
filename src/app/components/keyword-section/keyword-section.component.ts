import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keyword-section',
  templateUrl: './keyword-section.component.html',
  styleUrls: ['./keyword-section.component.scss']
})
export class KeywordSectionComponent implements OnInit {
  content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates utamet, magni nihil totam beatae autem asperiores."
  title = "Keywords"
  constructor() { }

  ngOnInit(): void {
  }

}

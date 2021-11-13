import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
selector: 'graphs-container',
  templateUrl: './graphs-container.component.html',
  styleUrls: ['./graphs-container.component.scss']
})
export class GraphsContainerComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'metrics-container',
  templateUrl: './metrics-container.component.html',
  styleUrls: ['./metrics-container.component.scss']
})
export class MetricsContainerComponent implements OnInit {

  constructor(public global : GlobalService) { }

  ngOnInit(): void {
  }

}

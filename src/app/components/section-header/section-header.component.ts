import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() value : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

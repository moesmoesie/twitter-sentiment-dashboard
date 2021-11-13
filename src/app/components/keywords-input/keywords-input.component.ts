import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'keywords-input',
  templateUrl: './keywords-input.component.html',
  styleUrls: ['./keywords-input.component.scss']
})
export class KeywordsInputComponent implements OnInit {
  keywords = ["obama", "Covid19", "Mark Rutten"]
  readonly separatorKeysCodes = [ENTER];

  addKeyword(event: MatChipInputEvent){
    if(event.value){
      this.keywords.push(event.value)
    }
    event.chipInput!.clear()
  }

  removeKeyword(index:number){
    if(index > -1 && index < this.keywords.length){
      this.keywords.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'keywords-input',
  templateUrl: './keywords-input.component.html',
  styleUrls: ['./keywords-input.component.scss']
})
export class KeywordsInputComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER];

  addKeyword(event: MatChipInputEvent){
    if(event.value){
      this.store.addKeyword(event.value)
    }
    event.chipInput!.clear()
  }

  constructor(
    public store: StoreService 
  ) { }

  ngOnInit(): void {
  }

}

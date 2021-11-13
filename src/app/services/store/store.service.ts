import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  keywords: string[] = []

  addKeyword(value: string){
    this.keywords.push(value)
  }

  removeKeyword(index:number){
    if(index > -1 && index < this.keywords.length){
      this.keywords.splice(index, 1);
    }
  }
  
  constructor() { }
}

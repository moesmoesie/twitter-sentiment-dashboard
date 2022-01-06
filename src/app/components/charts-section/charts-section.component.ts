import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/interfaces/tweet';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'charts-section',
  templateUrl: './charts-section.component.html',
  styleUrls: ['./charts-section.component.scss']
})
export class ChartsSectionComponent implements OnInit {
  selectedOption: string = "";
  filtereddata: Tweet[] = []

  changeClient(value: string){
    this.selectedOption = value;
    if(this.selectedOption == null){
      this.filtereddata = this.store.tweets
      return
    }

    this.filtereddata = this.store.tweets.filter((tweet) => {
      if(tweet.hashtags.includes(this.selectedOption)){
        return true;
      }else{
        return false;
      }
    })
  }

  constructor(
    public store: StoreService
  ) { }

  gethashtag(){
    const data = this.get_hashtag_data().map(element => {
      return element[0]
    })

    if(this.selectedOption != null){
      if(this.selectedOption != "" ){
        data.unshift("Clear")
      }
    }

    return data
  }

  get_hashtag_data(){
    var arr: [string,number][] = [];

    if(this.store.hashtags){
      arr = Object.entries(this.store.hashtags)
      arr.sort((a,b) => {
        return b[1] - a[1]
      })
    }
    return arr.slice(0,10)
  }

  ngOnInit(): void {
    this.filtereddata = this.store.tweets
  }
}

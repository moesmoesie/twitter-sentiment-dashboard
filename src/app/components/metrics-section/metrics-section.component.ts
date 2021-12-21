import { Component, OnInit, OnChanges } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'metrics-section',
  templateUrl: './metrics-section.component.html',
  styleUrls: ['./metrics-section.component.scss']
})
export class MetricsSectionComponent implements OnInit {
  
  get_total_tweets(){
    if(this.store.tweet_count){
      return this.store.tweet_count
    }
    return 0
  }

  get_hashtag_data(){
    var arr: [string,number][] = [];

    if(this.store.hashtags){
      arr = Object.entries(this.store.hashtags)
      arr.sort((a,b) => {
        return b[1] - a[1]
      })
    }
    return arr.slice(0,3)
  }

  getPercentage(value : number){
    if(this.store.tweet_count){
      return Math.round(value / this.store.tweet_count * 100)
    }
    return 0
  }

  get_sentiment_data(){
    if(this.store.sentiment_count && this.store.tweet_count){
      var data : [string, number,string][]  = [
        ["Positive", Math.round(this.store.sentiment_count.positief / this.store.tweet_count * 100),"happy"],
        ["Neutral",Math.round(this.store.sentiment_count.neutraal / this.store.tweet_count * 100),"happy"],
        ["Negative",Math.round(this.store.sentiment_count.negatief / this.store.tweet_count * 100),"happy"]
      ]

      data.sort((a,b) => {
        return a[1] - b[1]
      })

      return data
    }
    return [
      ["Positive", 0, "happy"], 
      ["Negative", 0, "happy"], 
      ["Neutral", 0, "happy"]
    ]
  }

  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("hello")
  }
}

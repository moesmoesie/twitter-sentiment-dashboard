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
    return arr.slice(0,5)
  }

  getPercentage(value : number){
    if(this.store.tweet_count){
      return Math.round(value / this.store.tweet_count * 100)
    }
    return 0
  }

  get_sentiment_data(){
    if(this.store.sentiment_count && this.store.tweet_count){

      const posCount = this.store.sentiment_count.positief ?? 0
      const negCount = this.store.sentiment_count.negatief ?? 0
      const neutrCount = this.store.sentiment_count.neutraal ?? 0


      const posPercentage = posCount == 0 ? 0 :  Math.round(posCount / this.store.tweet_count * 100)
      const negPercentage = negCount == 0 ? 0 : Math.round(negCount / this.store.tweet_count * 100)
      const neutralPercentage = neutrCount == 0 ? 0 : Math.round(neutrCount / this.store.tweet_count * 100)
      
   

      var data : [string, number,number,string][]  = [
        ["Positive", posPercentage,posCount, "happy"],
        ["Neutral", neutralPercentage,neutrCount,"neutral"],
        ["Negative", negPercentage ,negCount,"sad"]
      ]

      data.sort((a,b) => {
        return a[1] - b[1]
      })

      return data
    }
    return [
      ["Positive", 0,0, "happy"], 
      ["Negative", 0,0, "happy"], 
      ["Neutral", 0,0, "happy"]
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

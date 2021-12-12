import { Component, OnInit, Input} from '@angular/core';
import { Tweet } from 'src/app/interfaces/tweet';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input() tweet : Tweet = {
    created_at : "",
    hashtags: [],
    id: "",
    public_metrics:{
      like_count: 0,
      retweet_count: 0,
      quote_count: 0,
      reply_count: 0
    },
    sentiment: "",
    text: ""
  }; // decorate the property with @Input()


  get_sentiment_asset(sentiment: string){
    if(sentiment == 'negatief'){
      return "sad-white.svg"
    }else if(sentiment == 'positief'){
      return "happy-white.svg"
    }else{
      return "neutral-white.svg"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

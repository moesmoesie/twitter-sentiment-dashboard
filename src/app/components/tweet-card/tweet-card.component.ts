import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/interfaces/tweet';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: Tweet = {
    id: "1",
    text:"Empty Tweet",
    created_at: "now",
    public_metrics: {
      retweet_count: 1,
      reply_count: 23,
      like_count: 20,
      quote_count: 31
    }
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

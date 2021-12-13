import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/interfaces/api_response';
import { Tweet } from 'src/app/interfaces/tweet';
import { Keyword } from 'src/app/interfaces/keyword';
import { ApiPayload } from 'src/app/interfaces/api_payload';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  keywords: Keyword[] = []
  tweet_count : number | undefined = undefined;
  sentiment_count: {
    "negatief": number,
    "neutraal": number,
    "positief": number
  } | undefined
  tweets : Tweet[] = []
  hashtags : {string: number} | undefined;
  isLoading = false
  addKeyword(value: string){
    this.keywords.push({value: value, isNegated: false})
    this.get_data()
  }

  removeKeyword(index:number){
    if(index > -1 && index < this.keywords.length){
      this.keywords.splice(index, 1);
    }
    this.get_data()
  }

  get_data(){
    if(this.keywords.length == 0){
      this.tweet_count = undefined
      this.sentiment_count = undefined
      this.tweets = []
      return;
    }

    this.isLoading = true

 
    var kGroups : Keyword[][] = [[]] 

    this.keywords.forEach((keyword : Keyword)=>{
      kGroups[0].push(keyword)
    })

    const data :  ApiPayload = {
        "k_groups": kGroups
    }

    const url = isDevMode() ? "http://192.168.2.10:8080/" : "https://twitter-sentiment-api-zrldtrrrqa-ez.a.run.app"

    this.http.post<ApiResponse>(url, data)
      .subscribe((response: ApiResponse) => {
        this.tweet_count = response.tweet_count
        this.tweets = response.tweets
        this.sentiment_count = response.sentiment_count
        this.hashtags = response.hashtag_count
        this.isLoading = false
      })
    }

  constructor(private http: HttpClient) { }
}
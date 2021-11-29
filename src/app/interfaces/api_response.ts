import {Tweet} from './tweet';

export interface ApiResponse {
    "tweet_count": number,
    "sentiment_count": {
        "negatief": number,
        "neutraal": number,
        "positief": number
    },
    "tweets": Tweet[]
}
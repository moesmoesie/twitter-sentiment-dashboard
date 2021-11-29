import {Tweet} from './tweet';

export interface ApiResponse {
    "tweet_count": number,
    "tweets": Tweet[]
}
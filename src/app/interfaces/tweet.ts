export interface Tweet {
    "created_at": string,
    "public_metrics": {
        "retweet_count": number,
        "reply_count": number,
        "like_count": number,
        "quote_count": number
    },
    "id": string,
    "text": string,
    "sentiment" : string,
    "hashtags": string[]
}
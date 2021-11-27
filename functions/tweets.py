from pandas.core.frame import DataFrame
from models.keyword import Keyword
import requests
import pandas as pd


SEARCH_URL = "https://api.twitter.com/1.1/search/tweets.json"
FIELDS = ["full_text","retweet_count","metadata"]

class TwitterAPI():

    def __init__(self, bearer_token) -> None:
        self.header = {
            "Authorization": f"Bearer {bearer_token}"
        }

    def search(self, params):
        query_params = {
            'q':'(from:hugodejonge -filter:replies)',
            "lang":"nl", 
            "tweet_mode": "extended"
        }
        
        response = requests.get(SEARCH_URL, headers=self.header,params=query_params)

        if response.status_code != 200:
            raise Exception(response.status_code, response.text)

        df = pd.DataFrame(response.json()["statuses"], columns=FIELDS)

        df = pd.concat([df, df["metadata"].apply(pd.Series)], axis=1)
        df.drop(columns=["metadata","iso_language_code"],inplace=True)


        return df
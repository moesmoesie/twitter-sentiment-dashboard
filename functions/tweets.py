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

    def create_params(self,keyword_groups: list[list[Keyword]]):
        query_params = {
            "lang":"nl", 
            "tweet_mode": "extended"
        }

        query = ""

        for index,group in enumerate(keyword_groups):
            if index > 0 and index != len(keyword_groups):
                query += " OR "
            query += "("
            for index,keyword in enumerate(group):
                query += keyword.get_processed_value()
                if index < len(group) - 1:
                    query += " "
            query += ")"

        query_params["q"] = query
        return query_params


    def search(self, keywords : list[list[Keyword]]):
        query_params = self.create_params(keywords)
        
        response = requests.get(SEARCH_URL, headers=self.header,params=query_params)

        if response.status_code != 200:
            raise Exception(response.status_code, response.text)


        data: list = response.json()["statuses"]
        if len(data) == 0:
            return False

        df = pd.DataFrame(data, columns=FIELDS)
        df = pd.concat([df, df["metadata"].apply(pd.Series)], axis=1)
        df.drop(columns=["metadata","iso_language_code"],inplace=True)
        return df
import os
from dotenv import load_dotenv
from models.keyword import Keyword
load_dotenv()
from tweets import TwitterAPI

def main(data):
    twitter_api = TwitterAPI(os.environ["TWITTER_BEARER_TOKEN"])

    keyword_groups = []
    for group in data["keyword_groups"]:
        keywords = []
        for keyword in group:
            keywords.append(Keyword(keyword["value"], keyword["isNegated"]))
        keyword_groups.append(keywords)

    data = twitter_api.search(keyword_groups)
    return data

if __name__ == "__main__":
    data = {
        "keyword_groups": [
            [
                {"value" : "from:hugodejonge", "isNegated": False},
                {"value" : "replies", "isNegated": True},
            ]
        ]
    }

    data = main(data)
    print(data)
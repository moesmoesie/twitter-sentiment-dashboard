from models.keyword import Keyword
import os
from dotenv import load_dotenv
load_dotenv()
from tweets import TwitterAPI

def main(keywords):
    keywords = [Keyword(keyword) for keyword in keywords]
    twitter_api = TwitterAPI(os.environ["TWITTER_BEARER_TOKEN"])
    data = twitter_api.search("")

if __name__ == "__main__":
    keywords = [
        "#Party",
        "#Fun",
        "@Jason",
        "Hello World"
    ]

    main(keywords)
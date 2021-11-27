class Keyword:

    def __init__(self, keyword_string) -> None:
        if keyword_string[0] == '@':
            self.type = "USER"
            self.value = keyword_string[1:]
        elif keyword_string[0] == "#":
            self.type = "HASHTAG"
            self.value = keyword_string[1:]
        else:
            self.type = "WORD"
            self.value = keyword_string
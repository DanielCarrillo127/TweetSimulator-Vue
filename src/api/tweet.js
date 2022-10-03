import { size, remove } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { TWEETS } from "../utils/constants.js";

export function saveTweetApi(tweet, username) {
  const tweets = getTweetApi();

  if (size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date(),
      },
    ];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
  } else {
    
    const tweetTemp = {
      id: uuidv4(),
      tweet,
      username,
      createdAt: new Date(),
    };
    tweets.push(tweetTemp)
    localStorage.setItem(TWEETS, JSON.stringify(tweets));

  }
}

export function getTweetApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (tweets) {
    return JSON.parse(tweets);
  }
  return [];
}

export function deleteTweetApi(idTweet) {
    const tweets = getTweetApi();
    remove(tweets, function(tweet){
        return tweet.id === idTweet
    });
    localStorage.setItem(TWEETS, JSON.stringify(tweets));
  }

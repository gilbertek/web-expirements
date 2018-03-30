import React, { Component } from 'react';
import PropTypes from 'prop-types';

const shouldFail = id => [3, 4].includes(id);

// Fake Request
const likedTweetRequest = (tweetId, like) => {
  console.log(`HTTP /like_tweet/${tweetId}?like=${like} (begin)`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldFail(tweetId);
      console.log(
        `HTTP /like_tweet/${tweetId}?like={like} (${
          shouldSucceed ? 'success' : 'failure'
        })`
      );
      shouldSucceed ? resolve() : reject();
    }, 1000);
  });
};

const setTweetLiked = (tweetId, newLiked) => {
  return state => {
    return {
      tweets: state.tweets.map(
        tweet =>
          tweet.id === tweetId
            ? { ...tweet, likes: tweet.likes + (newLiked ? -1 : 1) }
            : tweet
      ),
      likedTweets: !newLiked
        ? state.likedTweets.filter(id => id !== tweetId)
        : [...state.likedTweets, tweetId],
    };
  };
};

const initialState = {
  tweets: [0, 3, 98, 0, 0].map((likes, i) => ({
    id: i + i,
    likes,
    username: `${shouldFail(i + 1) ? 'Fail' : 'Cool'}Cat${i + 1}`,
    content: `Some really great content here (${i + 1})...`,
  })),
  likedTweets: [2],
};

const Tweet = ({ key, tweet, isLiked, onClickFunc }) => {
  return <div className="tweet-item" />;
};

class TweetBox extends Component {
  state = initialState;
  likeRequestPending = false;

  onClickLikeOptimistic = evt => {
    evt.preventDefault();
  };

  onClickLike = tweetId => {
    console.log(`Clicked like: ${tweetId}`);

    // Prevent double submission
    if (this.likeRequestPending) {
      console.log('Request is already pending');
      return;
    }

    console.log(`Update state: ${tweetId}`);

    const isLiked = this.state.likedTweets.includes(tweetId);
    this.setState(setTweetLiked(tweetId, !isLiked));
    this.likeRequestPending = true;

    likedTweetRequest(tweetId, true)
      .then(() => {
        console.log('Resolved');
      })
      .catch(() => {
        console.log('Catched');
        this.setState(setTweetLiked(tweetId, isLiked));
      })
      .then(() => (this.likeRequestPending = false));
  };

  render() {
    const { tweets, likedTweets } = this.state;
    return (
      <div className="container">
        <h3 className="text-muted text-center lead pt-2">
          Optimistic UI Updates with React.
        </h3>
        <div className="list-group">
          {tweets.map(tweet => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              isLiked={likedTweets.includes(tweet.id)}
              onClickLike={this.onClickLike}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TweetBox;

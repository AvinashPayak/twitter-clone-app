<template>
  <!-- 
            side-nav
            the-header
            post-tweet
            tweet-list
            trending-tab   
         -->

  <div class="lg:w-1/2 w-full h-full overflow-y-scroll">
    <post-tweet></post-tweet>
    <section>
      <tweet-card
        class="px-5 py-3 vorder-b-8 border-lighter flex"
        v-for="tweet in tweets"
        :key="tweet.tweetId"
        :username="tweet.handle"
        :first-name="tweet.firstName"
        :last-name="tweet.lastName"
        :handle="tweet.handle"
        :text="tweet.text"
        comments="0"
        likes="0"
        retweets="0"
      ></tweet-card>
    </section>
  </div>
</template>

<script>
import PostTweet from "../../components/layouts/Post-Tweet/PostTweet.vue";
import TweetCard from "../../components/layouts/Tweet/TweetCard.vue";
export default {
  components: {
    PostTweet,
    TweetCard,
  },
  data() {
    return {
      tweets: {},
    };
  },
  async created() {
    const twitterId = this.$store.getters["user/getUser"].twitterId;
    const token = this.$store.getters["user/getToken"];
    const data = {
      twitterId,
      token,
    };
    if (!token) {
      const path = "/login";
      this.$router.push(path);
    } else {
      await this.$store.dispatch("tweets/loadHomeTweets", data);
      this.tweets = this.$store.getters["tweets/getHomeTweets"];
    }
  },
  methods: {
    getTweets() {},
  },
};
</script>
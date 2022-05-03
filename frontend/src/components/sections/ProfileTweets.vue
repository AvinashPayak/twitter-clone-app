<template>
  <post-tweet></post-tweet>
  <tweet-list :tweets="getProfileTweets"></tweet-list>
</template>

<script>
import PostTweet from "../layouts/Post-Tweet/PostTweet.vue";
import TweetList from "../layouts/TweetList.vue";
export default {
  created() {
    //const user = this.$store.getters['user/getUser'];
    this.loadProfileTweets();
  },
  watch: {
      $route(newRoute){
          this.loadProfileTweets(newRoute);
      }
  },
  methods:{
      loadProfileTweets() {
      const data = {
        twitterId: this.$route.params.id,
      };
      this.$store.dispatch("tweets/loadProfileTweets", data);
    },
  },
  computed: {
    getProfileTweets() {
      const tweets = this.$store.getters["tweets/getProfileTweets"];
      return tweets;
    },
    
  },
  components: {
    PostTweet,
    TweetList,
  },
};
</script>
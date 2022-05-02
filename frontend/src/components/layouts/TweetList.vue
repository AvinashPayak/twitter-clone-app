<template>
  <section>
    <tweet-card
      class="px-5 py-3 vorder-b-8 border-lighter flex"
      v-for="tweet in tweets"
      :key="tweet.tweetId"
      :username="getHandle()"
      :first-name="getFirstName()"
      :last-name="getLastName()"
      :handle="getHandle()"
      :text="tweet.text"
      comments="0"
      likes="0"
      retweets="0"
    ></tweet-card>
  </section>
</template>

<script>
import TweetCard from "./Tweet/TweetCard.vue";
export default {
  props: ["tweets"],
  components: {
    TweetCard,
  },
  data(){
    return {
      user: ''
    }
  },
  async created(){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          twitterId: this.$route.params.id,
        }),
      };
      const response = await fetch(
        "http://localhost:3000/user/searchedUser",
        requestOptions
      );
      const responseData = await response.json();
      const searchedUser = responseData.searchedUser[0];
      console.log('searched user tweet list',searchedUser);
      this.user = searchedUser
  },
  methods: {
    getHandle() {
      console.log("get handle")
      return this.user.handle;
    },
    getFirstName() {
      return this.user.firstName;
    },
    getLastName() {
      return this.user.lastName;
    },
  },
};
</script>
<template>
  <base-card>
    <tweet-dp></tweet-dp>
    <div class="w-full">
      <tweet-details
        :username="username"
        :time="time"
        :first-name="firstName"
        :last-name="lastName"
      ></tweet-details>
      <tweet-text :text="text"></tweet-text>
      <tweet-options
        :comments="comments"
        :likes="likes"
        :retweets="retweets"
      ></tweet-options>
    </div>
  </base-card>
</template>

<script>
import TweetOptions from "./TweetOptions.vue";
import TweetDetails from "./TweetDetails.vue";
import TweetText from "./TweetText.vue";
import TweetDp from "./TweetDp.vue";

export default {
  props: [
    "username",
    "firstName",
    "lastName",
    "handle",
    "time",
    "text",
    "comments",
    "likes",
    "retweets",
  ],
  components: {
    TweetOptions,
    TweetDetails,
    TweetText,
    TweetDp,
  },
};
</script>
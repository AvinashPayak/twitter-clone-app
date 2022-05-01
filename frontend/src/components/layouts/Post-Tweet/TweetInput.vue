<template>
  <form @submit.prevent="submitForm" class="w-full px-4 relative">
    <textarea
      v-model.trim="text"
      class="mt-3 pb-3 w-full focus:outline-none"
      placeholder="what's up?"
    ></textarea>
    <post-options></post-options>
    <base-button class="absolute">Tweet</base-button>
  </form>
</template>

<script>
import { nanoid } from 'nanoid';
import PostOptions from "./PostOptions.vue";
export default {
  data() {
    return {
      text: "",
    };
  },
  components: {
    PostOptions,
  },
  methods: {
    submitForm() {
      const formData = {
        tweetId: nanoid(),  
        twitterId: this.getTwitterId(),
        text: this.text
      };
      if (this.text === "") {
        return;
      }
      console.log("submit form method run")
      this.$store.dispatch("tweets/postTweet", formData);
    },
    getTwitterId() {
      const user = this.$store.getters["user/getUser"];
      const twitterId = user.twitterId;
      return twitterId;
    },
  },
};
</script>
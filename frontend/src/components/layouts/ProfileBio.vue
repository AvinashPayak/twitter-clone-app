<template>
  <div class="m-4">
    <div class="flex justify-between items-center border-b border-lighter pb-4">
      <img
        src="../../../public/twitterDp.png"
        class="h-40 w-40 rounded-full flex-none"
      />
      <base-button
        v-if="userDetails.twitterId !== getLoggedInUser().twitterId"
        @click="followUser"
        >{{ followBtnText }}</base-button
      >
    </div>
    <div class="mt-4 text-lg">
      <h2 class="text-3xl font-bold">{{ getName }}</h2>
      <p class="text-gray-500">@{{ userDetails.handle }}</p>
      <p>{{ getDesc }}</p>
      <div class="flex">
        <router-link to="#"
          ><a href="">Following: {{ getFollowing.length }}</a></router-link
        >
        <router-link to="#"
          ><a class="ml-4" href=""
            >Followers: {{ getFollowers.length }}</a
          ></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  data() {
    return {
      followBtnText: "",
    };
  },
  created() {
    this.loadFollowData();
  },
  props: ["userDetails"],
  components: {
    BaseButton,
  },
  computed: {
    getFollowing() {
      const following = this.$store.getters["user/getFollowing"];
      return following;
    },
    getFollowers() {
      const followers = this.$store.getters["user/getFollowers"];
      return followers;
    },
    getHandle() {
      return this.userDetails.handle;
    },
    getName() {
      return `${this.userDetails.firstName} ${this.userDetails.lastName}`;
    },
    getDesc() {
      return this.userDetails.description;
    },
  },
  watch: {
    $route(newRoute) {
      this.loadFollowData(newRoute);
    },
    followBtnText: function onchange(newValue, oldValue) {
      console.log(oldValue, newValue);
      this.loadFollowData();
    },
  },
  methods: {
    async followUser() {
      const user = this.$store.getters["user/getUser"].twitterId;
      const following = this.$route.params.id;
      const token = this.$store.getters["user/getToken"];
      const data = {
        user,
        following,
        token,
      };
      console.log("token from frontend", token);
      if (this.followBtnText == "follow") {
        this.$store.dispatch("user/followUser", data);
      } else {
        this.$store.dispatch("user/unfollowUser", data);
      }
      this.loadFollowData();
    },
    getLoggedInUser() {
      const user = this.$store.getters["user/getUser"];
      return user;
    },
    async loadFollowData() {
      const user = this.$store.getters["user/getUser"].twitterId;
      const token = this.$store.getters["user/getToken"];

      const following = this.$route.params.id;
      const data = {
        user: user,
        token
      };
      await this.$store.dispatch("user/getFollowers", data);
      await this.$store.dispatch("user/getFollowing", data);
      const followingList = this.$store.getters["user/getFollowing"];
      let present = false;
      for (const user in followingList) {
        if (followingList[user].twitterId == following) {
          present = true;
          break;
        }
      }
      if (present) {
        this.followBtnText = "following";
      } else {
        this.followBtnText = "follow";
      }
    },
  },
};
</script>
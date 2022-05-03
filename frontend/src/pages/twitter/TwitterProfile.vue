<template>
  <div class="lg:w-1/2 w-full h-full overflow-y-scroll">
    <the-header>
      <div>
        <h1 class="text-xl font-bold">
          {{ user.firstName }} {{ user.lastName }}
        </h1>
        <h3>Total Tweets: {{getTotalTweets}}</h3>
      </div>
    </the-header>
    <profile-bio :user-details="user"></profile-bio>
    <section
      class="
        nav nav-tabs
        flex flex-col
        md:flex-row
        nav-justified
        flex-wrap
        pl-0
        border-b border-lighter
        m-4
      "
    >
      <router-link
        :to="getTweetsRoute"
        class="
          nav-item
          flex-grow
          text-center text-2xl
          hover:bg-gray-100
          focus:bg-gray-200
        "
      >
        <button class="pointer-events-none">Tweets</button>
      </router-link>
      <router-link
        :to="getFollowersRoute"
        class="
          nav-item
          flex-grow
          text-center text-2xl
          hover:bg-gray-100
          focus:bg-gray-200
        "
      >
        <button class="pointer-events-none">Followers</button>
      </router-link>

      <router-link
        :to="getFollowingRoute"
        class="
          nav-item
          flex-grow
          text-center text-2xl
          hover:bg-gray-100
          focus:bg-gray-200
        "
      >
        <button class="pointer-events-none">Following</button>
      </router-link>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileBio from "../../components/layouts/ProfileBio.vue";

export default {
  data() {
    return {
      currentComponent: "ProfileTweets",
      user: ''
    };
  },
  components: {
    ProfileBio,
  },
  created(){
    this.getMyDetails();
  },
  watch:{
    $route(newRoute){
      this.getMyDetails(newRoute);
    }
  },
  methods: {
    async getMyDetails() {
      const user = this.$store.getters["user/getUser"];
      console.log(user.twitterId , this.$route.params.id);
      if (user.twitterId == this.$route.params.id) {
        this.user = user;
      } else {
        const data = {
          twitterId: this.$route.params.id,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
        const response = await fetch(
          "http://localhost:3000/user/searchedUser",
          requestOptions
        );
        const responseData = await response.json();
        this.$store.dispatch("user/searchedUser", responseData.searchedUser[0]);
        const searchedUser = this.$store.getters["user/getSearchedUser"];
        this.user =  searchedUser;
      }
    },
  },
  computed: {
    getFollowingRoute() {
      return `/users/${this.user.twitterId}/profile/following`;
    },
    getFollowersRoute() {
      return `/users/${this.user.twitterId}/profile/followers`;
    },
    getTweetsRoute() {
      return `/users/${this.user.twitterId}/profile/tweets`;
    },
    getMyTweets() {
      return 0;
    },
    getTotalTweets() {
      const totalTweets = this.$store.getters['tweets/getProfileTweets'].length;
      return totalTweets;
    },
  },
};
</script>
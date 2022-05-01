<template>
  <div class="lg:w-1/2 w-full h-full overflow-y-scroll">
  <the-header>
      <div>
        <h1 class="text-xl font-bold">{{getMyDetails.firstName}} {{getMyDetails.lastName}}</h1>
        <h3>Total Tweets: </h3>
      </div>
    </the-header>
    <profile-bio :user-details="getMyDetails"></profile-bio>
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
    <router-link :to="getTweetsRoute" class="
            nav-item
            flex-grow
            text-center text-2xl
            hover:bg-gray-100
            focus:bg-gray-200
          ">
      <button
        class="
          pointer-events-none
        "
      >
        Tweets
      </button>
      </router-link>
      <router-link :to="getFollowersRoute" class="
            nav-item
            flex-grow
            text-center text-2xl
            hover:bg-gray-100
            focus:bg-gray-200
          ">
        <button
         class="pointer-events-none">
          Followers
        </button>
      </router-link>

        <router-link :to="getFollowingRoute" class="
            nav-item
            flex-grow
            text-center text-2xl
            hover:bg-gray-100
            focus:bg-gray-200
          ">
      <button
        class="
          pointer-events-none
        "
      >
        Following
      </button>
        </router-link>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileBio from "../../components/layouts/ProfileBio.vue";

export default {
  components: {
    ProfileBio,
  },
  computed: {
    getFollowingRoute() {
      return `/users/${this.getMyDetails.twitterId}/profile/following`
    },
    getFollowersRoute() {
      return `/users/${this.getMyDetails.twitterId}/profile/followers`
    },
    getTweetsRoute() {
      return `/users/${this.getMyDetails.twitterId}/profile/tweets`
    },
    getMyTweets(){
        return 0
    },
    getMyDetails(){
        const user = this.$store.getters["user/getUser"];
        return user
    },
    getTotalTweets(){
        return 0
    }
  },
};
</script>
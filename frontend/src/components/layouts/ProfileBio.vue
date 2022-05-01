<template>
  <div class="m-4">
    <div class="flex justify-between items-center border-b border-lighter pb-4">
      <img
        src="../../../public/twitterDp.png"
        class="h-40 w-40 rounded-full flex-none"
      />
      <base-button>Edit Profile</base-button>
    </div>
    <div class="mt-4 text-lg">
        <h2 class="text-3xl font-bold">{{getName}}</h2>
        <p class="text-gray-500">@{{userDetails.handle}}</p>
        <p>{{getDesc}}</p>
        <div class="flex">
            <router-link to="#"><a href="">Following: </a></router-link>
            <router-link to="#"><a class="ml-4" href="">Followers: </a></router-link>
        </div>
    </div>
  </div>
</template>

<script>

import BaseButton from "../UI/BaseButton.vue";
export default {
  props:['userDetails'],
  components: {
    BaseButton,
  },
  computed:{
      followingRoute(){
          return 0
      },
      followersRoute(){
          return 0
      },
      getHandle(){
        return this.userDetails.handle
      },
      getName(){
        return `${this.userDetails.firstName} ${this.userDetails.lastName}`
      },
      getDesc(){
        return this.userDetails.description;
      },
      getBorn(){
        return this.userDetails.born;
      },
  }
};
</script>
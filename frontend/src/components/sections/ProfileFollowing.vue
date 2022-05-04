<template>
    <div>
        <div class="w-full rounder-lg p-3">
      <button
        v-for="user in following"
        :key="user.twitterId"
        class="
          w-full
          flex
          justify-between
          hover:bg-lightest
          p-3
          border-b border-lighter
        "
      >
        <div>
          <p class="text-sm text-left leading-tight text-dark">
            {{ user.firstName }} {{user.lastName}}
          </p>
          <p class="text-bold text-left leading-tight">@{{ user.handle }}</p>
          <p class="text-left leading-tight text-dark"></p>
        </div>
      </button>
    </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      following:this.getFollowingUsers()
    };
  },
  methods: {
      getFollowingUsers(){
          const followingUsers = this.$store.getters["user/getFollowing"];
          return followingUsers;
      }
  }
}
</script>
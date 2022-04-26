<template>
    <!-- 
            side-nav
            the-header
            post-tweet
            tweet-list
            trending-tab   
         -->

    <div class="lg:w-1/2 w-full h-full overflow-y-scroll">
      <h1>Twitter Home {{ getHandle }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      handle: "",
      firstName: "",
      lastName: "",
    };
  },
  beforeCreate() {
    const userData = this.$store.getters["user/getUser"];

    this.handle = userData.handle;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
  },
  computed: {
    getHandle() {
      const userData = this.$store.getters["user/getUser"];
      console.log(userData);
      return userData.handle;
    },
  },
};
</script>SideNav
<template>
      <side-nav></side-nav>
    <router-view></router-view>
    <trending-tab></trending-tab>
</template>

<script>
import SideNav from '../layouts/SideNav.vue';
import TrendingTab from '../layouts/TrendingTab.vue'
export default {
  components: {SideNav,TrendingTab},
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
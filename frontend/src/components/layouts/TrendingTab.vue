<template>
  <div
    class="
      md:block
      hidden
      w-1/3
      h-full
      border-l border-lighter
      py-2
      px-6
      relative
    "
  >
  <form v-on:keydown.enter.prevent="submitForm">
<input
      class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
      placeholder="Search Twitter"
      name="search"
      id="search"
      v-model.trim="search"
    />
    <i
      class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
    ></i>
  </form>
    
    <div class="w-full rounder-lg bg-lightest p-3">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Trends for you</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button
        v-for="trend in trends"
        :key="trend.id"
        class="
          w-full
          flex
          justify-between
          hover:bg-lighter
          p-3
          border-t border-lighter
        "
      >
        <div>
          <p class="text-sm text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="text-bold text-left leading-tight">{{ trend.title }}</p>
          <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button
        class="
          p-3
          w-full
          hover:bg-lighter
          text-left text-blue
          border-t border-lighter
        "
      >
        show more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trends: [
        {
          top: "Trending in TX",
          title: "Gigi",
          bottom: "Trending with: Rip Gigi",
        },
        { top: "Music", title: "We Won", bottom: "135K Tweets" },
        { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
        { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
        { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
      ],
      search:'',
      formIsValid: true
    };
  },
  methods: {
    async submitForm(){
      let formData = {
        search: this.search
      }
    if (this.search === "") {
        this.formIsValid = false;
        return;
      }
      console.log(formData);
      const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle: formData.search,
        })
      };
      const response = await fetch('http://localhost:3000/user/searchedUser',requestOptions);
      const responseData = await response.json();
      console.log(responseData.searchedUser);
      if(responseData.searchedUser){
        this.$store.dispatch('user/searchedUser', responseData.searchedUser[0]);
        const searchedUser = this.$store.getters['user/getSearchedUser'];
        const twitterId = searchedUser.twitterId;
        console.log(searchedUser);
        const path = '/users/'+twitterId+'/searchedProfile/tweets'
        console.log(path);
        this.$router.replace(path);
      }
    }
  }
};
</script>
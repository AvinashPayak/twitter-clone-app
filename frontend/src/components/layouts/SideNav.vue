<template>
  <div
    class="
      lg:w-1/5
      h-screen
      border-r border-lighter
      px-2
      lg:px-6
      py-2
      flex flex-col
      justify-between
    "
  >
    <div>
      <router-link to="/">
        <button
          class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue"
        >
          <i class="fa-brands fa-twitter"></i>
        </button>
      </router-link>
      <div>
        <button
          v-for="tab in navButtonTabs"
          :key="tab.icon"
          class="
            flex
            items-center
            py-2
            px-4
            hover:bg-lightblue
            rounded-full
            mr-auto
            hover:text-blue
            mb-3
          "
        >
          <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i
          ><router-link :to="tab.link"
            ><p
              :class="`${tab.title} text-lg font-semibold text-left hidden lg:block`"
            >
              {{ tab.title }}
            </p></router-link
          >
        </button>
      </div>
      <button
        class="
          text-white
          bg-blue
          rounded-full
          font-semibold
          focus:outline-none
          w-12
          h-12
          lg:h-auto lg:w-full
          p-3
          hover:bg-darkblue
        "
      >
        <p class="hidden lg:block">Tweet</p>
        <i class="fas fa-plus lg:hidden"></i>
      </button>
    </div>
    <div class="lg:w-full relative">
      <button
        @click="dropdown = !dropdown"
        class="
          flex
          items-center
          w-full
          hover:bg-lightblue
          rounded-full
          p-2
          focus:outline-none
        "
      >
        <img
          src="profile.jpg"
          class="w-10 h-10 rounded-full border border-lighter"
        />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-bold leading-tight">Avinash Payak</p>
          <p class="text-sm leading-tight">@avinashpayak</p>
        </div>
        <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
      </button>
      <div
        v-if="dropdown === true"
        class="
          absolute
          bottom-0
          left-0
          w-64
          rounded-lg
          shadow-md
          border-lightest
          bg-white
          mb-16
        "
      >
        <button
          @click="dropdown = !dropdown"
          class="
            p-3
            flex
            items-center
            w-full
            hover:bg-lightest
            p-2
            focus:outline-none
          "
        >
          <img
            src="profile.jpg"
            class="w-10 h-10 rounded-full border border-lighter"
          />
          <div class="ml-4">
            <p class="text-sm font-bold leading-tight">Avinash Payak</p>
            <p class="text-sm leading-tight">@avinashpayak</p>
          </div>
          <i class="fas fa-check ml-auto test-blue"></i>
        </button>
        <button
          @click="dropdown = !dropdown"
          class="
            w-full
            text-left
            hover:bg-lightest
            border-t border-lighter
            p-3
            test-sm
            focus:outline-none
          "
        >
          Add an existing account
        </button>
        <button
          @click="dropdown = !dropdown"
          class="
            w-full
            text-left
            hover:bg-lightest
            border-t border-lighter
            p-3
            test-sm
            focus:outline-none
          "
        >
          Log out @avinashpayak
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getUserId() {
      const user = this.$store.getters["user/getUser"];
      const twitterId = user.twitterId;
      return twitterId;
    },
  },
  data() {
    return {
      navButtonTabs: [
        { icon: "fas fa-home", title: "Home", id: "home", link: `/users/${this.getUserId}/home` },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore", link: "#" },
        {
          icon: "far fa-bell",
          title: "Notifications",
          id: "notifications",
          link: "#",
        },
        {
          icon: "far fa-envelope",
          title: "Messages",
          id: "messages",
          link: "#",
        },
        {
          icon: "far fa-bookmark",
          title: "Bookmarks",
          id: "bookmarks",
          link: "#",
        },
        {
          icon: "fas fa-clipboard-list",
          title: "Lists",
          id: "lists",
          link: "#",
        },
        {
          icon: "far fa-user",
          title: "Profile",
          id: "profile",
          link: `/users/${this.getUserId()}/profile/tweets`,
        },
        { icon: "fas fa-ellipsis-h", title: "More", id: "more", link: "#" },
      ],
      dropdown: false,
    };
  },
};
</script>


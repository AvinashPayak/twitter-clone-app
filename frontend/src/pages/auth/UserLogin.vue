<template>
  <div class="pt-10 pb-10 pl-20 pr-20 bg-blue rounded-3xl">
    <i
      class="
        fa-brands fa-twitter
        h-12
        w-12
        text-3xl text-white
        relative
        left-1/3
      "
    ></i>
    <h1 class="text-3xl pt-4 pb-4 text-white font-bold">Login</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input
          class="p-3 text-lg w-full"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          autocomplete="off"
          v-model.trim="username"
        />
      </div>
      <div class="mb-3">
        <input
          class="p-3 text-lg w-full"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          autocomplete="off"
          v-model.trim="password"
        />
      </div>
      <p v-if="!formIsValid" class="text-red-100 mt-5 mb-5 text-lg">
        Invalid credentials
      </p>
      <div class="mb-3 w-full flex justify-around">
        <button
          class="
            mr-3
            bg-white
            text-blue
            h-10
            px-4
            font-semibold
            focus:outline-none
            rounded-full
            bottom-0
            right-0
            hover:bg-gray-100
          "
        >
          Login
        </button>
        <router-link to="/signup">
          <base-button>Signup instead</base-button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      let formData = {
        handle: this.username,
        password: this.password,
      };
      if (this.username === "" || this.password === "") {
        this.formIsValid = false;
        return;
      }
      let storedUsers = [];
      if (localStorage["users"]) {
        storedUsers = JSON.parse(localStorage.getItem("users"));
      }
      let userData = {};
      for (const user in storedUsers) {
        if (
          storedUsers[user].handle == formData.handle &&
          storedUsers[user].password == formData.password
        ) {
          userData = storedUsers[user];
          console.log("user found");
          break;
        }
      }
      if (JSON.stringify(userData) != JSON.stringify({})) {
        console.log(userData);
        this.$store.dispatch('user/loginUser', userData);
        console.log('getter',this.$store.getters['user/getUser']);
        const user = this.$store.getters['user/getUser'];
        const userId = user.id;
        console.log(userId);
        const path = '/users/'+ userId + '/home'
        console.log(path);
        this.$router.push(path);
      }
      else{
          console.log("no user found");
      }
    },
  },
};
</script>
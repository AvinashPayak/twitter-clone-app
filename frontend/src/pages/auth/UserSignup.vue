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
    <h1 class="text-3xl pt-4 pb-4 text-white font-bold">Create Your Account</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input
          v-model.trim="firstName"
          class="p-3 text-lg w-full"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.trim="lastName"
          class="p-3 text-lg w-full"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.trim="email"
          class="p-3 text-lg w-full"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.trim="handle"
          class="p-3 text-lg w-full"
          type="text"
          id="handle"
          name="handle"
          placeholder="Username"
          autocomplete="off"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.trim="desc"
          class="p-3 text-lg w-full"
          type="textarea"
          id="desc"
          name="desc"
          placeholder="Description"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.trim="password"
          class="p-3 text-lg w-full"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          autocomplete="off"
        />
      </div>
      <p v-if="!formIsValid" class="text-red-100 mt-5 mb-5 text-lg">
        Invalid values. Please fill the form correctly
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
          Register
        </button>
        <router-link to="/login">
          <base-button>Login instead</base-button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      handle: "",
      desc: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      const formData = {
        id: nanoid(),
        handle: this.handle,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        desc: this.desc,
        password: this.password,
        followers: [],
        following: [],
      };
      console.log(formData);
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      let storedUsers = [];
      if (localStorage["users"]) {
        storedUsers = JSON.parse(localStorage.getItem("users"));
      }
      storedUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          handle: formData.handle,
          email: formData.email,
          desc: formData.desc,
          password: formData.password,
        }),
      };
      const response = await fetch('http://localhost:3000/signup', requestOptions)
      console.log(response);
    },
  },
};
</script>
<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate(){
    const data = [];
    if(!localStorage["users"]) {
      localStorage.setItem('users',data);
    }
  }
}
</script>



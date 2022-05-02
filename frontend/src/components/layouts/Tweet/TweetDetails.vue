<template>
        <div class="flex items-center w-full">
          <p class="font-semibold">{{firstName}} {{lastName}}</p>
          <p class="text-sm text-dark ml-2">@{{username}}</p>
          <p class="text-sm text-dark ml-2">{{time}}</p>
          <i class="text-dark fas fa-angle-down ml-auto"></i>
        </div>
</template>

<script>
export default {
  props:['username','firstName','lastName','time']
}
</script>
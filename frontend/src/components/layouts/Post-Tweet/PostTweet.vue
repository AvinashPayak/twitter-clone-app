<template>
    <div class="px-5 py-3 vorder-b-8 border-lighter flex">
      <tweet-dp></tweet-dp>
      <tweet-input></tweet-input>
    </div>
</template>

<script>
import TweetDp from '../Tweet/TweetDp.vue';
import TweetInput from '../Post-Tweet/TweetInput.vue';

export default {
    components: {
        TweetDp,
        TweetInput
    }    
}
</script>
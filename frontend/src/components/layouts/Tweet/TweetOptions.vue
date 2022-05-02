<template>
    <div class="flex items-center justify-between w-full">
          <tweet-option>
            <i class=" far fa-comment mr-3"></i>
            <p>{{comments}}</p>
          </tweet-option>
          <tweet-option>
            <i class="fas fa-retweet mr-3"></i>
            <p>{{retweets}}</p>
          </tweet-option>
          <tweet-option>
            <i class="far fa-heart mr-3"></i><p class="">{{likes}}</p>
          </tweet-option>
          <tweet-option>
            <i class="far fa-share-square mr-3"></i>
          </tweet-option>
        </div>
</template>

<script>
import TweetOption from './TweetOption.vue';

export default {
    props:['likes','comments','retweets'],
    components:{
        TweetOption  
    }
}
</script>
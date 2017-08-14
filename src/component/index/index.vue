<template>
  <section class="index">
      <v-swipe></v-swipe>
      <v-nav></v-nav>
  </section>
</template>

<script>
import Cswipe from './swipe.vue';
import Cnav from './nav.vue';
export default {
  components:{
    'v-swipe':Cswipe,
    'v-nav':Cnav
  }
}
</script>

<style lang="less">
  .index {
    padding-top:40px;
    padding-bottom:50px;
  }
</style>

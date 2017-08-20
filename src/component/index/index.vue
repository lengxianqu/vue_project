<template>
  <section class="index">
    <v-swipe :list="list"></v-swipe>
    <v-nav></v-nav>
  </section>
</template>

<script>
import Cswipe from '../common/swipe.vue';
import Cnav from './nav.vue';
import Http from '../../js/common/http.js';
export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    'v-swipe': Cswipe,
    'v-nav': Cnav
  },
  methods: {
    //获取轮播图数据
    getLunbo() {
      let url = 'http://139.199.192.48:8888/api/getlunbo';
      Http.get(url, body => {
        this.list = body.message;
      })
      // this.$http.get(url).then(rep => {
      //   console.log(rep);
      //   if (rep.body.status == 0) {
      //     this.list = rep.body.message;
      //   }
      // })
    }
  },
  created: function () {
    this.getLunbo();
  },
}
</script>

<style lang="less">
.index {
  padding-top: 40px;
  padding-bottom: 50px;
}
</style>

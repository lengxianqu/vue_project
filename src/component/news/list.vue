<template>
    <section class="list">
        <v-title :content="title"></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(v,i) in list" :key="v.id">
                <router-link :to="'/news/details/' + v.id">
                    <img class="mui-media-object mui-pull-left" :src="v.img_url">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{v.title}}</p>
                        <div class="list_item">
                            <p>创建时间:{{v.add_time | formatDate('yyyy-mm-dd')}}</p>
                            <p>点击量：{{v.click}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
export default {
    data:function() {
        return {
            list:[],
            title:'新闻资讯'
        }
    },
    methods:{
        getNews() {
            let url = config.newsList;
            this.$http.get(url).then(rep => {
                rep.body.status == 0 && (this.list = rep.body.message);
            })
        }
    },
    created() {
        this.getNews()
    },

    components:{
        'v-title':Ctitle
    }
}
</script>
<style lang="less">
    .list {
        padding-top:40px;
        padding-bottom:50px;
        height:100%;
        &_item {
            p {
                display:inline-block;
            }
        }
    }
    
</style>


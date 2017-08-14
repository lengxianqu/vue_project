<template>
    <section class="list">
        <v-title :content="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间{{news.add_time | formatDate('yyyy-mm-dd')}}</span>
                <span>浏览量:{{news.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="news.content">
                  
                </div>
            </div>
        </div>
        <v-Ccomment :id="id"></v-Ccomment>
    </section>
</template>
<script>
//引入title组件
import Ctitle from '../common/title.vue';
//引入路径配置文件
import config from '../../js/config.js';
//引入评论组件
import Ccomment from '../common/comment.vue';

export default {
    data: function () {
        return {
            title: '新闻详情',
            news:{},
            id:this.$route.params.id
        }
    },
    //注册组件
    components: {
        'v-title': Ctitle,
        'v-Ccomment':Ccomment
    },

    methods:{
        getDetails() {
            console.log(this.$route);
            let url = config.newsDetails + this.$route.params.id;
            //发送ajax请求
            this.$http.get(url).then(rep => {
                // console.log(rep);
                rep.body.status == 0 && (this.news = rep.body.message[0]);
            })
        }
    },
    created() {
        this.getDetails();
    }
}
</script>
<style lang='less'>
    .list {
        padding-top: 40px;
        padding-bottom: 50px;
        height: 100%;
    }
</style>




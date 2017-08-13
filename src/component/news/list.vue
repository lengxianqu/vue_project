<template>
    <section class="list">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(v,i) in list" :key="v.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="v.img_url">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{v.title}}</p>
                        <div class="list_item">
                            <p>创建时间:{{v.add_time}}</p>
                            <p>点击量：{{v.click}}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import config from '../../js/config.js';
export default {
    data:function() {
        return {
            list:[]
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


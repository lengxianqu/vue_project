<template>
    <section class="list">
        <!--图片分类  -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <router-link to="/photo/list/0">全部</router-link>
            </li>
            <li class="mui-table-view-cell" v-for="(v,i) in categoryList" :key="i">
                <!--加载相应模块  -->
                <router-link :to="'/photo/list/' + v.id">
                    {{v.title}}
                </router-link>
    
            </li>
    
        </ul>
        <!--图片列表  -->
        <div class="mui-card" v-for="(v,i) in photoList" :key="v.id">
            <router-link :to="'/photo/details/' + v.id">
                <div class="mui-card-header mui-card-media" :style="getStyle(v)"></div>
            </router-link>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{v.title}}</p>
                    <p style="color: #333;">{{v.zhaiyao}}</p>
                </div>
            </div>
            
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js';
export default {
    data() {
        return {
            categoryList: [],
            photoList:[]
        }
    },
    watch:{
        // 实例身上有一个$route属性，当前页面变化时，这个属性的值也会跟着变化,
    // 只要页面一变化，那么就根据新的id渲染图片列表
        $route() {
            this.getPhotoList(this.$route.params.id);
        }
    },
    methods: {
        //获取分类列表
        getCategoryList() {
            let url = config.photoCategoryList;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                body.status == 0 && (this.categoryList = body.message);
            })
        },
        //获取图片列表
        getPhotoList(id) {
            let url = config.photoList + id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if(body.status == 0) {
                    // console.log(body.message);
                    this.photoList = body.message.map(function(v,i) {
                        v.img_url = config.imgDomain + v.img_url;
                        return v;
                    })
                }
            })
        },

        getStyle(item) {
            return 'height:40vw;background-image:url("'+item.img_url+'")';
        }


    },
    created() {
        this.getCategoryList();
        this.getPhotoList(this.$route.params.id);
    }
}
</script>
<style lang="less">
.list {
    padding-top: 40px;
    padding-bottom: 50px;
    .mui-table-view {
        overflow: hidden;
        li {
            float: left;
        }
    }
}
</style>


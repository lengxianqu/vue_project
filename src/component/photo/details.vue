<template>
    <section class="photoDetails">
        <v-title :content="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">
                {{imageInfo.title}}
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(v,i) in humImages" :key="i" >
                           
                                <img v-preview="v.src" :src="v.src" />
                                <!-- <div class="mui-media-body">幸福就是可以一起睡觉</div> -->
                            
                        </li>               
                    </ul>
                </div>
            </div>
            <div class="mui-card-footer">
                {{imageInfo.content}}
            </div>
        </div>
    </section>
</template>
<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
export default {

    data() {
        return {
            title: '图片详情',
            imageInfo: [],
            humImages:[]
        }
    },
    components: {
        'v-title': Ctitle
    },
    methods: {
        //发送ajax请求
        //获取图片详情
        getimageInfo() {
            let url = config.PhotoDetailsInfo + this.$route.params.id;
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0) {
                    // console.log(rep);
                    this.imageInfo = rep.body.message[0];

                }
            })
        },
        //图片分享详情中的缩略图
        gethumImages() {
            let url = config.Photohumimages + this.$route.params.id;
            this.$http.get(url).then(rep => {
                console.log(rep);
                if(rep.body.status == 0) {
                    this.humImages = rep.body.message.map(function(v,i) {
                        v.src = config.imgDomain + v.src;
                        return v;
                    });
                }
            })
        }
        
    },
    created() {
        this.getimageInfo();
        this.gethumImages();
    }
}
</script>
<style lang="less">
.photoDetails {
    padding-top: 40px;
    padding-bottom: 50px;
    img{
        width:100%;
    }
}
</style>



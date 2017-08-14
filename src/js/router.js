import VueRouter from 'vue-router';
//导入index组件
import Cindex from '../component/index/index.vue';
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';
import CphotoList from '../component/photo/list.vue';
import CphotoDetails from '../component/photo/details.vue';
export default new VueRouter({
    routes:[
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        //新闻
        { path: '/news/list',component:CnewsList},
        { path: '/news/details/:id',component:CnewsDetails},
        // 图片分享
        { path: '/photo/list/:id',component:CphotoList},
        { path: '/photo/details/:id',component:CphotoDetails}
    ]
})

import VueRouter from 'vue-router';
//导入index组件
import Cindex from '../component/index/index.vue';
import CnewsList from '../component/news/list.vue';
export default new VueRouter({
    routes:[
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        { path: '/news/list',component:CnewsList}
    ]
})

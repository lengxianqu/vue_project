import VueRouter from 'vue-router';
//导入index组件
import Cindex from '../component/index/index.vue';

export default new VueRouter({
    routes:[
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex }
    ]
})

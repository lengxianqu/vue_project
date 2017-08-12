//导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//手动启动插件
Vue.use(VueRouter);
Vue.use(VueResource);

//导入我们自己的东西

//导入组件
import App from '../component/App.vue'; //根组件

// 淡入路由配置
import router from './router.js';

//实例化Vue，关联视图
var vm = new Vue({
    el:'#app',
    render:c =>c(App),
    router 
})
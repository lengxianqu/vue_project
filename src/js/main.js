//导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// 导入vuex
import Vuex from 'vuex';

//导入MintUI
import MintUI from 'mint-ui';
//导入mintui的css
import 'mint-ui/lib/style.css';

//导入MUI的样式，因为MUI这个框架不是vue插件，是原生js写的，里面的代码不兼容es5的严格模式，不使用，只用他的样式
import 'mui/dist/css/mui.css';
//引入mui的扩展图标
import 'mui/examples/hello-mui/css/icons-extra.css';

//手动启动插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(Vuex);
//图片预览插件
import ImgPreview from '../component/plugin/img_preview_install.js';
Vue.use(ImgPreview);
//导入我们自己的东西
import './filter.js';
//导入组件
import App from '../component/App.vue'; //根组件

// 淡入路由配置
import router from './router.js';
//vuex数据管理

import Vgoods from './vuex/goods.js';

//实例化Vue，关联视图
var vm = new Vue({
    el:'#app',
    render:c =>c(App),
    router,
    store:new Vuex.Store({
        //单一状态数（唯一数据源）
        state:{
            count:200
        },
        //store的计算属性
        getters:{
            
            getCount(state) {
                return state.count;
            }
        },

        //修改状态
        mutations:{
            //es6的语法
            countAdd(state) {
                state.count++;
            },

            setCount(state,val) {
                state.count = val;
            }
        }
    })
})
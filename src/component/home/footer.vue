<template>
    <footer>
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/index" class="mui-tab-item mui-active">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/goods/list" class="mui-tab-item">
                <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                <span class="mui-tab-label">商品购买</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcart/list">
                <span class="mui-icon mui-icon-extra mui-icon-extra-express">
                    <span class="mui-badge">{{ total }}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </a>
        </nav>
    </footer>
</template>
<script>
import goodsStorage from '../../js/model/goods.js';
export default {
    data() {
        return {
            total:goodsStorage.get()
        }
    }
}
</script>
<style>

</style>



<template>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/news/list">
                <span class="mui-icon-extra mui-icon-extra-new"></span>
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
                
            
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/photo/list/0">
                <span class="mui-icon mui-icon-image">
                    <span class="mui-badge">5</span>
                </span>
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-gear"></span>
                <div class="mui-media-body">Setting</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">about</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-more"></span>
                <div class="mui-media-body">more</div>
            </a>
        </li>
    </ul>
</template>
<script>
export default {

}
</script>
<style>
    .mui-icon-extra {
    
        font-size: 41px;
    }
</style>



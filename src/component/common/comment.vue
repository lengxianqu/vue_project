<template>
    <section class="comment">
        <!--提交评论  -->
        <div class="mui-card">
            <div class="mui-card-header">提交评论</div>
            <div class="mui-card-content">
                <textarea v-model="content" id="textarea" rows="5" placeholder="请发表您的看法..."></textarea>
                <button @click="submitComment" type="button" class="mui-btn mui-btn-primary mui-btn-block">
                    发表评论
                </button>
            </div>
    
        </div>

        <!--评论列表  -->
        <div class="mui-card">
            <div class="mui-card-header">评论列表</div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for="(v,i) in list" :key="i">
                        <div>
                            <span>第{{i+1}}楼</span>
                            <span>用户:{{v.user_name}}</span>
                            <span>发表时间:{{v.add_time | formatDate}}</span>
                        </div>
                        <p>{{v.content}}</p>
                    </li>
                </ul>
                <button ref="loadMoreBtn" @click="getComment" type="button" class="mui-btn mui-btn-primary mui-btn-block">
                    加载更多
                </button>
            </div>
    
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            content: '',
            pageindex:1,
            list:[] //接收后台返回的评论数据
            
        }
    },
    props: ['id'],
    methods: {
        //发布评论
        submitComment() {
            let url = config.commentPut + this.id;
            let data = { content: this.content };
            this.$http.post(url, data, { emulateJSON: true }).then(rep => {
                let body = rep.body;
                // console.log(rep);
                if(body.status == 0) {
                    this.list.unshift({content:this.content});
                   
                    // 提示
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon icon-success'
                    });
                    this.content = '';
                }
                
            })
        },

        //获取评论列表
        getComment() {
            let url = `${config.commentList + this.id }?pageindex=${this.pageindex}`;
            this.$http.get(url).then(rep => {
                // console.log(rep);
                let body = rep.body;
                if(body.status == 0 && body.message.length > 0) {
                    this.list.push(...body.message);
                    // console.log(this.list);
                    this.pageindex++;//下一次获取第二页数据
                }else {
                    // console.log(this.$refs);//获得dom元素
                    this.$refs.loadMoreBtn.disabled = true;
                }
            })
        }
    },
    created:function() {
        //默认加载第一页数据
        this.getComment();
    }
}
</script>
<style lang="less">
.comment {
      .mui-card-content p {
          background-color: rgba(0, 0, 0, .3);
          color: #333;
      }
      .mui-btn-block {
          padding:8px 0;
          font-size:14px;
      }
  }
</style>



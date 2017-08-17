//配置ajax请求的地址
const domain = 'http://139.199.192.48:8888';
//暴漏一个对象
export default {
    // domain: domain,
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    //新闻
    newsList:domain+ '/api/getnewslist',
    newsDetails:domain + '/api/getnew/',

    //评论
    commentPut:domain + '/api/postcomment/',
    commentList:domain + '/api/getcomments/',

    // 图片
    photoCategoryList:domain + '/api/getimgcategory',
    photoList:domain + '/api/getimages/',

    //图片详情
    PhotoDetailsInfo:domain + '/api/getimageInfo/',
    Photohumimages:domain + '/api/getthumimages/',

    //商品
    goodsList:domain + '/api/getgoods?pageindex=',
    goodsDetails:domain + '/api/goods/getdesc/', //商品图文介绍
    goodsPrice: domain + '/api/goods/getinfo/',  // 商品价格相关信息,

    //购物车
    shopcartList: domain + '/api/goods/getshopcarlist/'



}
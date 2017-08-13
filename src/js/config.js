//配置ajax请求的地址
const domain = 'http://139.199.192.48:8888';
//暴漏一个对象
export default {
    domain: domain,
    newsList:domain+ '/api/getnewslist',
    newsDetails:domain + '/api/getnew'

}
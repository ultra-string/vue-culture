## 插件

git cz
全局安装commitizen :  npm install -g commitizen
    设置支持angular格式的commit message : commitizen init cz-conventional-changelog —save-exact
    提交代码的时候使用： git cz


## 问题
1.左上官网LOGO:页面缺失
2.轮播图







## 已解决
1.图形验证码请求不到
2.右侧悬浮式用isLink=1筛选出来的  但是判断跳转条件却是isLink==1跳url
3.特别策划有评论，评论需要传文章id，特别策划的文章id未知


## 曾用请求地址env
if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://118.190.152.1:8083';
	baseUrl = 'http://118.190.152.1:8081';
    baseImgPath = 'http://118.190.152.1:8084/user/imageVali/';
}else{
	baseUrl = 'http://118.190.152.1:8081';
    baseImgPath = 'http://118.190.152.1:8084/user/imageVali/';
}

## api

const authdServer = axios.create({
  baseURL: 'http://118.190.152.1:8084',
  timeout: 10000
});

## 打包env
if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://118.190.152.1:8083';
	baseUrl = 'http://192.168.110.78:8081';
    baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
}else{
	baseUrl = 'http://192.168.110.78:8081';
    baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
}

## api

const authdServer = axios.create({
  baseURL: 'http://192.168.110.78:8081',
  timeout: 10000
});
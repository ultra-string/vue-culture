/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://118.190.152.1:8083';
	baseUrl = 'http://192.168.110.78:8081';
    baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
}else{
	baseUrl = 'http://192.168.110.78:8081';
    baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
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
// 开发
// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'http://118.190.152.1:8081';
//     baseImgPath = 'http://118.190.152.1:8084/user/imageVali/';
// }else{
// 	baseUrl = 'http://118.190.152.1:8081';
//     baseImgPath = 'http://118.190.152.1:8084/user/imageVali/';
// }
// 打包
if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://118.190.152.1:8083';
	baseUrl = 'http://118.190.152.1:8081';
    baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
}else{
	// baseUrl = 'http://192.168.110.78:8081';
	// baseImgPath = 'http://192.168.110.78:8081/user/imageVali/';
	baseUrl = 'http://test.wodsy.com';
    baseImgPath = 'http://test.wodsy.com/user/imageVali/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
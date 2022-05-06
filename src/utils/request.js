/**
 * 包含应用中所有请求接口的函数：接口请求函数
 */

import axios from 'axios';
// import qs from 'querystring';
// import { message } from 'antd';
import { BASE_URL , TIMEOUT} from './config';
/**
 * 处理失败的方法
 * status:状态码
 * info:信息
 */

const errorHandle = ( status , info) =>{
    switch(status){
        case 400:
            // 语义有误，当前请求无法被服务器理解。请修改，否则客户端无法收到被响应。
            break;
        case 401:
            // token:令牌
            // 服务器认证失败
            break;
        case 403:
            // 服务器理解请求但拒绝执行
            break;
        case 404:
            // 请检查网络请求地址
            break;
        case 500:
            // 服务器遇到了一个未曾预料的情况，导致了它无法完成对请求的处理
            break;
        case 502:
            // 作为网关或者带路工作的服务器尝试执行请求时，从上游服务器接收到一个无效响应
            break;
        default:
            console.log(info);
            break;
    }
}

/**
 * 创建axios实例对象
 */
const instance = axios.create({
    // 公共配置
    baseURL:BASE_URL,
    timeout:TIMEOUT,

});

/**
 * 处理拦截器
 */

/**
 * 请求拦截
 */
instance.interceptors.request.use(
    config => {
        // if(config.method === 'post'){
        //     config.data = qs.stringify(config.data);
        // }
        // config.headers.Authorization = window.sessionStorage.getItem('token'); //获取token
        // 必须return
        return config;
    },
    error => Promise.reject(error)
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
    // 完成
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error =>{
        const {response} = error;
        errorHandle(response.status , response.info);
    }
)

export default instance;
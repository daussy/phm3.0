
/**
 * 用于发送与业务逻辑相关的网络请求
 */

import { message } from 'antd';
import request from '../utils/request';

// 获取树列表
export function getTreeAPI(data){
    // return 一个promise出去
    return request.get('equip/sequence/buildMenu')
}
// // 在业务中可以写
// const getRree =async()=> {
//     const {data:res} = await getTreeAPI();
//     console.log(res);
// }

// 删除
export function deleteAPI(data){
    return request.delete('/delete')
}
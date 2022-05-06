import React from 'react';
import { HashRouter as Router , Route , Routes ,Redirect } from 'react-router-dom';
import DeviceManagement from '../pages/DeviceManagement/index';// 设备管理

// import DataManagement from '../pages/DataManagement/index'; //数据管理
// import ModelManagement from '../pages/ModelManagement/index'; //模型管理
// import Login from '../pages/User/Login/index'; //用户登录
// import Register from '../pages/User/Register/index'; //用户注册
// import Preprocessing from '../pages/Preprocessing/index'; //数据预处理
// import FeatureExtraction from '../pages/FeatureExtraction/index'; //特征提取
// import ModelBuild from '../pages/ModelBuild/index'; //模型构建
// import ModelTraining from '../pages/ModelTraining/index'; //模型训练
// import ModelValidation from '../pages/ModelValidation/index'; //模型校验
// import FaultDiagnosis from '../pages/FaultDiagnosis/index'; //故障诊断
// import LifePrediction from '../pages/LifePrediction/index'; //寿命预测
// import FaultPrediction from '../pages/FaultPrediction/index'; //故障预测
// import HealthEvaluation from '../pages/HealthEvaluation/index'; //健康评估
// import AnomalyDetection from '../pages/AnomalyDetection/index'; //异常检测和报警

// antd
import { Empty } from 'antd';
// 数组
import {componentArr} from './data-config';

const createComponent = (componentArr)=>{
    let result = componentArr.map((item,index)=>{
        if(item.component && !item.children ){
            return(
                <Route key = {index}  path ={`/${item.path}`} element = {item.component} ></Route>
            )
        }else if(!item.component && item.children && item.children.length>0){
            let result = item.children.map((child, childIndex)=>{
                return(
                    <Route key = {childIndex}  path ={`/${child.path}`} element = {child.component} ></Route>
                )
            })
            return result;
        }else{
            return(
                <Route key = {index}  path ={item.path} element = {<Empty description={false} />} ></Route>
            )
        }
       
    })
    return result;
}
const AppRouter = ()=>{
    // console.log( createComponent(componentArr));
    return(
            <Routes>
                {
                 createComponent(componentArr)
                }
                {/* <Redirect to = "/"></Redirect> */}
                <Route path = "*" element = {<DeviceManagement/>}></Route>
            </Routes>
    )
}
export default AppRouter;
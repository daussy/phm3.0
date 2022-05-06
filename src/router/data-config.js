import DeviceManagement from '../pages/DeviceManagement/index';// 设备管理
// import DataManagement from '../pages/DataManagement/index'; //数据管理
import Origin from '../pages/DataManagement/Origin/index'; //原始数据
import Feature from '../pages/DataManagement/Feature/index'; // 特征数据
import ModelManagement from '../pages/ModelManagement/index'; //算法模型库
import TemplateManagement from '../pages/TemplateManagement/index'; //处理流程库
import Login from '../pages/User/Login/index'; //用户登录
import Register from '../pages/User/Register/index'; //用户注册
import Preprocessing from '../pages/Preprocessing/index'; //数据预处理
import FeatureExtraction from '../pages/FeatureExtraction/index'; //特征提取
import FeatureScreening from '../pages/FeatureScreening/index'; //特征筛选
import Time_freConversion from '../pages/Time_freConversion/index'; //时频图像转换
import DatasetBuild from '../pages/DatasetBuild/index'; //数据集构建
import ModelTraining from '../pages/ModelTraining/index'; //模型训练
import ModelValidation from '../pages/ModelValidation/index'; //模型校验
import FaultDiagnosis from '../pages/FaultDiagnosis/index'; //故障诊断
import LifePrediction from '../pages/LifePrediction/index'; //寿命预测
import FaultPrediction from '../pages/FaultPrediction/index'; //故障预测
import HealthEvaluation from '../pages/HealthEvaluation/index'; //健康评估
import AnomalyDetection from '../pages/AnomalyDetection/index'; //异常检测和报警

const componentArr = [
    {
        name:"设备管理",
        path:"/",
        component:<DeviceManagement/>,
        children:null,
        icon:"icon-shujuguanli1"
    },
   
    {
        name:"资源库管理",
        path:"sub1",
        children:[
            {
                name:"算法模型库",
                path:"ModelManagement",
                component:<ModelManagement></ModelManagement>,
                children:null,
                icon:"icon-moxingguanli"
            },
            {
                name:"处理流程库",
                path:"TemplateManagement",
                component:<TemplateManagement></TemplateManagement>,
                children:null,
                icon:"icon-moxingguanli"
            }
        ],
        icon:"icon-moxingguanli"
    },
    {
        name:"数据管理",
        path:"sub2",
        // component:<DataManagement/>,
        children:[
            {
                name:"原始数据管理",
                path:"Origin",
                component:<Origin></Origin>,
                children:null,
                icon:"icon-moxingguanli"
            },
            {
                name:"特征数据管理",
                path:"Feature",
                component:<Feature></Feature>,
                children:null,
                icon:"icon-moxingguanli"
            }
        ],
        icon:"icon-shujuguanli1"
    },
    {
        name:"数据挖掘模块",
        path:"sub3",
        // component:DataMining,
        icon:"icon-shujuwajue",
        children:[
            {
                name:"数据预处理",
                path:"Preprocessing",
                component:<Preprocessing></Preprocessing>,
                children:null,
                icon:"icon-shujuyuchuli"
            },
            {
                name:"特征提取",
                path:"FeatureExtraction",
                component:<FeatureExtraction/>,
                children:null,
                icon:"icon-tezhengtiqu"
            },
            {
                name:"特征筛选",
                path:"FeatureScreening",
                component:<FeatureScreening/>,
                children:null,
                icon:"icon-tezhengshaixuan"
            },
            {
                name:"时频图像转换",
                path:"Time_freConversion",
                component:<Time_freConversion/>,
                children:null,
                icon:"icon-bianhuan"
            },
        ],
    },

    {
        name:"模型训练与校验",
        path:"sub4",
        // component:DataMining,
        icon:"icon-moxingxunlian",
        children:[
            {
                name:"数据集构建",
                path:"DatasetBuild",
                component:<DatasetBuild/>,
                children:null,
                icon:"icon-moxinggoujian-01"
            },
            {
                name:"模型构建与训练",
                path:"ModelTraining",
                component:<ModelTraining/>,
                children:null,
                icon:"icon-moxingxunlian"
            },
            {
                name:"模型校验",
                path:"ModelValidation",
                component:<ModelValidation/>,
                children:null,
                icon:"icon-xiaoyan"
            },
        ],
    },

    {
        name:"模型应用",
        path:"sub5",
        // component:DataMining,
        icon:"icon-moxingyingyong",
        children:[
            {
                name:"故障诊断",
                path:"FaultDiagnosis",
                component:<FaultDiagnosis/>,
                children:null,
                icon:"icon-guzhangzhenduan-01"
            },
            {
                name:"寿命预测",
                path:"LifePrediction",
                component:<LifePrediction/>,
                children:null,
                icon:"icon-tongjiyuce"
            },
            {
                name:"故障预测",
                path:"FaultPrediction",
                component:<FaultPrediction/>,
                children:null,
                icon:"icon-tubiaoyucebiao"
            },
            {
                name:"健康评估",
                path:"HealthEvaluation",
                component:<HealthEvaluation/>,
                children:null,
                icon:"icon-jiankangpinggu"
            },
            {
                name:"异常检测和报警",
                path:"AnomalyDetection",
                component:<AnomalyDetection/>,
                children:null,
                icon:"icon-yichangjiance"
            },
        ],
    },
    // {
    //     name:"用户管理",
    //     path:"User",
    //     component:User,
    //     children:null,
    // },
];

export {componentArr};
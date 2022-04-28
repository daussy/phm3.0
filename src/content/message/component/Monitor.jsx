// 监测信息
import React from "react";
import {mtColumns} from './tableConfig'
import { Descriptions} from 'antd';
import './monitor.scss';
const Monitor = () =>{
    
    return(
        <Descriptions className="mt_message" layout="vertical" size = {"small"} span={3} colon={false}  >
            {mtColumns.map((item,index)=>{
                    return(
                            <Descriptions.Item className="mt_title"  label = { <span>{item.title}</span>} >
                                <span className="mt_content" key={item.key}>{item.data}</span>
                            </Descriptions.Item>
                            )
                        })
            } 
        </Descriptions>   
    )
}


export default Monitor;
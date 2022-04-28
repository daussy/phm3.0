// 设备信息
import { data } from "browserslist";
import React from "react";
import {deviceColumns} from './tableConfig'
import { Space,Descriptions} from 'antd';
import './device.scss';

const Device = () =>{
    return(
           <Descriptions className="device_message" layout="vertical" size = {"small"} colon={false}  column={4}>
                {deviceColumns.map((item,index)=>{
                        return(
                            <Descriptions.Item className="device_title"  label = { <span>{item.title}</span>} >
                                <span className="device_content" key={item.key}>{item.data}</span>
                            </Descriptions.Item>
                                )
                            })
                    } 
          </Descriptions>
    )
}


export default Device;
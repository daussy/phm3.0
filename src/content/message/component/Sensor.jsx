// 传感器
import React from "react";
import {ssColumns} from './tableConfig';
import {Descriptions} from 'antd';
import './sensor.scss';

const Sensor = () =>{
    return(
           <Descriptions className="ss_message" colon={false} column={1}>
             {ssColumns.map((item,index)=>{
                        return(
                                <Descriptions.item className="ss_title" label = { <span>{item.title}</span>} >
                                    <div className="ss_content">{item.data}</div>
                                </Descriptions.item>
                                )
                            })
                    } 
            </Descriptions>      
    )
}
{/*  <Descriptions className="ss_title"  colon={false} column={1}>
                {ssColumns.map((item,index)=>{
                        return(
                                <Descriptions.item label = { <span>{item.title}</span>} >
                                    <span className="ss_content">{item.data}</span>
                                </Descriptions.item>
                                )
                            })
                    } 
                </Descriptions> */}
export default Sensor;
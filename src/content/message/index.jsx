import React from 'react';
import Device from './component/Device';
import Monitor from './component/Monitor';
import Sensor from './component/Sensor';
import './index.scss';
const Message = ()=>{
    return(
        <div className='content_message'>
            <Title CN_title = '设备信息' En_title = "Voice customer service"></Title>
               <Device/>
            <Title CN_title = '传感器设备信息' En_title = "Sensor inform"></Title>
               <Monitor/>
            <Title CN_title = '监测大数据' En_title = "Monitoring big data"></Title>
               <Sensor/>
        </div>
    )
}


const Title = ( props)=>{
    // CN_title 中文标题 En_title 英文标题
    return(
        <div className='message_title'>
            <div className='message_title_tri'></div>
            <p className='CN_title'>{props.CN_title}</p>
            <p className='En_title'>{props.En_title}</p>
            {/* 防止父元素高度塌陷要在最后加一个clear:both属性的元素 */}
            <p className="clear_box"></p>
        </div>
    )
}
export default  Message;
import React from 'react';
import { Row,Col } from 'antd';
import {Image} from 'antd';
import LeftChart from './leftChart';
import RightChart from './rightChart';
import './index.scss'


const Chart = ()=>{
    return(
        <div>
            <div>
                {/* <Image  
                className='chart_img' 
                src="./images/QQ图片20210603112104.png" /> */}
                <img  className='chart_img'  src='./images/QQ图片20210603112104.png'/> 
            </div>
            <Row justify="space-between" gutter={16}>
                <Col span={12} >
                <Title CN_title = '数据可视化1' En_title = "Online customer service incoming lines"></Title>
                </Col>
                <Col span={12} >
                <Title CN_title = '数据可视化2' En_title = "Online customer service incoming lines"></Title>
                </Col>
            </Row>
            <LeftChart />
            <RightChart />
        </div>
    )
}
const Title = ( props)=>{
    // CN_title 中文标题 En_title 英文标题
    return(
        <div className='chart_title'>
            <div className='message_title_tri'></div>
            <p className='CN_title'>{props.CN_title}</p>
            <p className='En_title'>{props.En_title}</p>
            {/* 防止父元素高度塌陷要在最后加一个clear:both属性的元素 */}
            <p className="clear_box"></p>
        </div>
    )
}
export default  Chart;
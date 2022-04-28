import React from 'react';
import { Statistic,Card ,Row,Col} from 'antd';
import './index.scss';

const Warning = ()=>{
    return(
        <div className="warring_message">
            <Row className='warring_title'>
                <Col span={24}>告警统计</Col>
            </Row>
            <Row className='warring_card' gutter={16}>
                <Col span={8}>
                    <Card
                    bordered={true}
                    style={{ backgroundColor: '#032e6a'}}
                    cover={<img alt="当日告警数" src="images/1.png"  height="150px"/>}>
                    <Statistic
                        value={0}
                        valueStyle={{ color: '#2effff',textAlign:'center'}}
                    />
                    <p>当日告警数</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  
                    style={{ backgroundColor: '#032e6a'}}
                    cover={<img alt="本月告警数" src="images/2.png" height="150px"/> }>
                    <Statistic
                        value={12}
                        valueStyle={{ color: '#2effff' ,textAlign:'center'}}
                    />
                    <p>本月告警数</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  
                    style={{ backgroundColor: '#032e6a'}}
                    cover={<img alt="本年告警数" src="images/3.png" height="150px"/>}>
                    <Statistic
                        value={68}
                        valueStyle={{ color: '#2effff',textAlign:'center' }}
                    />
                    <p>本年告警数</p>
                    </Card>
                </Col>
            </Row>
  </div>
);
    
}
export default  Warning;
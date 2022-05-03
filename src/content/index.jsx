import React from 'react';
import './index.scss';

import Message from './message/index';
import Chart from './chart/index';
import Result from './result/index';
import Warning from './warning/index';
const Content = ()=>{
    return(
        <div className="content">
            <div className="left_content">
                <Message></Message>
                <Warning></Warning>
            </div>
            <div className="center_content">
                <Chart></Chart>
            </div> 
            <div className="right_content">
                <Result></Result>
            </div>
        </div>
    )
}

export default Content;
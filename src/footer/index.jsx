import React from 'react';
import './index.scss';
import Gradient_line from '../utils/Gradient_line/index';
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="left_footer">
                <div className='left_gradient_line'><Gradient_line></Gradient_line></div>
            </div>
            <div className="center_footer"></div>
            <div className="right_footer">
                <div className='right_gradient_line'><Gradient_line></Gradient_line></div>
            </div>
        </div>
    )
}

export default Footer;
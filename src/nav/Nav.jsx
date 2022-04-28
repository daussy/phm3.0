import './nav.scss'

import Gradient_line from '../utils/Gradient_line/index';
const Nav = () =>{
    return(
        <div className='nav'>
            <div className='left_nav'></div>
            <div className='left_gradient_line'><Gradient_line></Gradient_line></div>
            
            <Center_line></Center_line>
            <Title></Title>
            <div className='right_gradient_line'><Gradient_line></Gradient_line></div>

            <div className="right_nav"></div>
        </div>
    )
};

const Title =()=>{
    return(
    <div className="title_container">
        <div className='title_bcg'>
            <div className='title_left_tri'>
                <div className=' title_left'></div>
                <div className=' title_left_2'></div>
                <div className=' title_left_3'></div>
                <div className=' title_left_4'></div>
            </div>
            <div className=' title_center'>
            </div>
            <div className="title_right_tri">
                <div className=' title_right'></div>
                <div className=' title_right_2'></div>
                <div className=' title_right_3'></div>
                <div className=' title_right_4'></div>
            </div>
        </div>
        <div className='title'>
            <div className='title_left_tri'>
                <div className=' title_left'></div>
                <div className=' title_left_2'></div>
                <div className=' title_left_3'></div>
                <div className=' title_left_4'></div>
            </div>

            <div className=' title_center'>
                <p>设备智能运维系统大屏端</p>
            </div>
            <div className="title_right_tri">
                <div className=' title_right'></div>
                <div className=' title_right_2'></div>
                <div className=' title_right_3'></div>
                <div className=' title_right_4'></div>
            </div>
        
        </div>
    </div>
    )
}

const Center_line = ()=>{
    return(
        <div className="center_line">
            <div className="left_line">
                <div className="left_line_1"></div>
                <div className="left_line_2"></div>
                <div className="left_line_3"></div>
            </div>
            <div className="right_line"></div>

        </div>

    )
}

export default Nav;
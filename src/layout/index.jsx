import React from 'react';
import {useState} from 'react';

// antd
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.scss';

// router
import AppRouter from '../router';
import { BrowserRouter ,useParams ,useNavigate  } from "react-router-dom";
import {componentArr} from '@/router/data-config';


// func
import {map_arr} from './function';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default () =>{

    return (
        <BrowserRouter>
            <Layout className='layout'>
                <Nav></Nav>
                <Layout>
                    <Aside></Aside>
                    <Container></Container>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

const Nav = ()=>{

    return(
        <Header className="header">
            <div className="logo" />
            <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    )
}

const Aside =()=>{

    let result = map_arr(componentArr);
    const [openKeys, setOpenKeys] = useState([]);

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3' , 'sub4' ,'sub5'];
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return(
        <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultOpenKeys={['0']}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={result}
                    />
        </Sider>
    )
}

const Container = ()=>{
    return(
        <Layout
            style={{
            padding: '0 24px 24px',
            }}
        >
            <Breadcrumb
            style={{
                margin: '16px 0',
            }}
            >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >

            <AppRouter></AppRouter>
            </Content>
        </Layout>
    )
}
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;
const MasterContainer = (props) => {
    return (
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to='/Movies/'>Movies</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/movies/3'>Details</Link></Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to='/movies'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <a href='http://www.fissioner.net/' style={{color: 'gray'}}>&lt; Fissioner &#47;&gt;</a>
            </Footer>
          </Layout>
    );
}

export default MasterContainer;
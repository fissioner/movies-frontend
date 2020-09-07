import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, withRouter } from "react-router-dom";


const { Header, Content, Footer } = Layout;
const MasterContainer = (props) => {
  const history = useHistory();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" style={{ backgroundColor: 'black', fontWeight: 'bold' }}><Link to='/movies/'>CineCritic</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} />
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><a onClick={() => history.goBack()}>| Back |</a></Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a href='http://www.fissioner.net/' style={{ color: 'gray' }}>&lt; Fissioner &#47;&gt;</a>
      </Footer>
    </Layout>
  );
}

export default withRouter(MasterContainer);
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Siderbar from '../sider'
import Header from '../header'
import Routers from '../../router'

const { Content } = Layout;

function Base() {
  return (
    <Layout style={{height: '100%'}}>
      <Header></Header>
      <Layout>
        <Siderbar></Siderbar>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
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
            {/* 主应用渲染 */}
            <Routers></Routers>
            {/* 子应用 */}
            <div id="container"></div>
            <div id="react16"></div>
            <div id="vue"></div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default Base;
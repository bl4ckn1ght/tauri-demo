import { Outlet } from 'react-router'
import { Layout } from 'antd'
import React from 'react'
import './index.less'

const { Content } = Layout

const layoutIndex: React.FC = () => {

  return (
    <Layout className="container">
      <Layout className="site-layout">
        <Content className="site-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default layoutIndex

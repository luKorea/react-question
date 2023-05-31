import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import MainLayoutWrapper from './styled'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const { Header, Content, Footer } = Layout

const MainLayout: FC<IProps> = () => {
  const nav = useNavigate()
  return (
    <MainLayoutWrapper>
      <Layout className="layout">
        <Header className="header">
          <div className="left-layout" onClick={() => nav('/')}>
            <EditOutlined /> 调查问卷
          </div>
          <div className="login" onClick={() => nav('/login')}>
            <UserOutlined /> 登录
          </div>
        </Header>
        <Content className="content-layout">
          <Outlet />
        </Content>
        <Footer className="footer-layout">调查问卷</Footer>
      </Layout>
    </MainLayoutWrapper>
  )
}

export default memo(MainLayout)

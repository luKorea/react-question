import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './styled'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const nav = useNavigate()
  return (
    <HomeWrapper>
      <Space direction="vertical">
        <div>问卷调查 | 在线投票</div>
        <div>已累计创建问卷 1090 份, 发布问卷 100 份, 收到答卷 1000 份</div>
        <Button type="primary" onClick={() => nav('/manage/list')}>
          开始使用
        </Button>
      </Space>
    </HomeWrapper>
  )
}

export default memo(Home)

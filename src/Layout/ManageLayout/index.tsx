import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ManageLayoutWrapper from './styled'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Divider, Space } from 'antd'
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined
} from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const ManageLayout: FC<IProps> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [nameList] = useState(['/manage/list', '/manage/star', '/manage/trash'])
  return (
    <ManageLayoutWrapper>
      <div className="content-left">
        <Space direction="vertical" size="middle">
          <Button
            type="primary"
            onClick={() => nav('/question/edit/add')}
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Divider style={{ borderColor: 'transparent' }} />
          <Button
            icon={<BarsOutlined />}
            type={pathname === nameList[0] ? 'default' : 'text'}
            onClick={() => nav(nameList[0])}
          >
            我的问卷
          </Button>
          <Button
            icon={<StarOutlined />}
            onClick={() => nav(nameList[1])}
            type={pathname === nameList[1] ? 'default' : 'text'}
          >
            星标问卷
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => nav(nameList[2])}
            type={pathname === nameList[2] ? 'default' : 'text'}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className="content-right">
        <Outlet />
      </div>
    </ManageLayoutWrapper>
  )
}

export default memo(ManageLayout)

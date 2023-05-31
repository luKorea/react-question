import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import NotFoundWrapper from './styled'

import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  const nav = useNavigate()
  return (
    <NotFoundWrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => nav('/')}>
            返回首页
          </Button>
        }
      />
    </NotFoundWrapper>
  )
}

export default memo(NotFound)

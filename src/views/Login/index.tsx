import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import LoginWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return <LoginWrapper>Login</LoginWrapper>
}

export default memo(Login)

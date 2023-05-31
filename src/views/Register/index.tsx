import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import RegisterWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const Register: FC<IProps> = () => {
  return <RegisterWrapper>Register</RegisterWrapper>
}

export default memo(Register)

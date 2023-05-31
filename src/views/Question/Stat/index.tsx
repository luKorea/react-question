import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import QuestionStatWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const QuestionStat: FC<IProps> = () => {
  return <QuestionStatWrapper>Login</QuestionStatWrapper>
}

export default memo(QuestionStat)

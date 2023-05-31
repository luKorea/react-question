import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import QuestionEditWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const QuestionEdit: FC<IProps> = () => {
  return <QuestionEditWrapper>QuestionEditWrapper</QuestionEditWrapper>
}

export default memo(QuestionEdit)

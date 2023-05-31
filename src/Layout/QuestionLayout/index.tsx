import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import QuestionLayoutWrapper from './styled'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const QuestionLayout: FC<IProps> = () => {
  return (
    <QuestionLayoutWrapper>
      <div className="footer">footer</div>
      <Outlet />
    </QuestionLayoutWrapper>
  )
}

export default memo(QuestionLayout)

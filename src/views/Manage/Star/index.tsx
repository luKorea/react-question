import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ManageStatWrapper from './styled'
import QuestionList from '@/components/QuestionList'
import { IQuestionType } from '@/types/question'

interface IProps {
  children?: ReactNode
}

const ManageStat: FC<IProps> = () => {
  const [list, setList] = useState<IQuestionType[]>([
    {
      _id: '1',
      title: 'korea',
      isStar: true,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    },
    {
      _id: '2',
      title: 'johe',
      isStar: true,
      isPublished: true,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    },
    {
      _id: '3',
      title: 'kobe',
      isStar: true,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    }
  ])

  function onSearch(e: string) {
    console.log(e, '星标问卷')
  }
  return (
    <ManageStatWrapper>
      <QuestionList
        type="stat"
        list={list}
        title="星标问卷"
        onSearch={onSearch}
      />
    </ManageStatWrapper>
  )
}

export default memo(ManageStat)

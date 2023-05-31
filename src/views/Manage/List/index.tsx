import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ManageListWrapper from './styled'
import QuestionList from '@/components/QuestionList'
import { IQuestionType } from '@/types/question'

interface IProps {
  children?: ReactNode
}

const ManageList: FC<IProps> = () => {
  const [list, setList] = useState<IQuestionType[]>([
    {
      _id: '1',
      title: 'korea',
      isStar: false,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    },
    {
      _id: '2',
      title: 'johe',
      isStar: false,
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
    },
    {
      _id: '4',
      title: 'kobe',
      isStar: true,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    },
    {
      _id: '5',
      title: 'kobe',
      isStar: true,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    },
    {
      _id: '6',
      title: 'kobe',
      isStar: true,
      isPublished: false,
      answerCount: 100,
      screatedAt: '2001/11/11 11:11:11'
    }
  ])

  function onSearch(e: string) {
    console.log(e, '我的问卷')
  }
  return (
    <ManageListWrapper>
      <QuestionList
        type="mime"
        list={list}
        title="我的问卷"
        onSearch={onSearch}
      />
    </ManageListWrapper>
  )
}

export default memo(ManageList)

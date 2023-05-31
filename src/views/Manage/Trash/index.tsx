import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ManageTrashWrapper from './styled'
import QuestionList from '@/components/QuestionList'
import { IQuestionType } from '@/types/question'
import { Tag } from 'antd'

interface IProps {
  children?: ReactNode
}

const ManageTrash: FC<IProps> = () => {
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

  const columns = [
    {
      title: '序号',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (isPublished: boolean) => (
        <Tag color={isPublished ? 'success' : 'processing'}>
          {isPublished ? '已发布' : '未发布'}
        </Tag>
      )
    },
    {
      title: '是否星标',
      dataIndex: 'isStar',
      key: 'isStar',
      render: (isStar: boolean) => (
        <Tag color={isStar ? 'success' : 'processing'}>
          {isStar ? '是' : '否'}
        </Tag>
      )
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
      key: 'answerCount'
    },
    {
      title: '日期',
      dataIndex: 'screatedAt',
      key: 'screatedAt'
    }
  ]
  function onSearch(e: string) {
    console.log(e, '回收站')
  }
  return (
    <ManageTrashWrapper>
      <QuestionList
        type="trash"
        list={list}
        title="回收站"
        onSearch={onSearch}
        columns={columns}
      />
    </ManageTrashWrapper>
  )
}

export default memo(ManageTrash)

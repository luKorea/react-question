import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import QuestionWrapper from './styled'
import QuestionCard from '@/components/QuestionCard'
import { Empty, Input, Space } from 'antd'
import FrontTable from '@/base-ui/FrontTable'
import { IQuestionType } from '@/types/question'

// 根据 type 展示分页器 或者下拉加载更多
type ListType = 'mime' | 'stat' | 'trash'

interface IProps {
  children?: ReactNode
  title: string
  type: ListType
  list: IQuestionType[]
  columns?: any[]
  onSearch?: (e: string) => void
  loadMore?: () => void
}

const { Search } = Input

const QuestionList: FC<IProps> = (props) => {
  function onSearch(e: string) {
    props.onSearch && props.onSearch(e)
  }

  function renderComponent() {
    if (!props.list) return <Empty />
    if (props.type === 'trash') {
      return (
        <FrontTable
          rowKey="_id"
          bordered
          data={props.list}
          columns={props.columns}
        />
      )
    } else {
      return props.list.map((item) => <QuestionCard key={item._id} {...item} />)
    }
  }

  function renderFooter() {
    if (props.type === 'mime') {
      return <div className="load-more">加载更多</div>
    } else if (props.type === 'stat') {
      return <div className="load-more">分页器</div>
    }
  }
  return (
    <QuestionWrapper>
      <div className="header">
        <div className="left">{props.title}</div>
        <div className="right">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 300 }}
            size="middle"
          />
        </div>
      </div>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* 渲染列表 */}
        {renderComponent()}
      </Space>
      {renderFooter()}
    </QuestionWrapper>
  )
}

export default memo(QuestionList)

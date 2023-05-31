import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Card, Divider, Popconfirm, Space, Tag } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  StarTwoTone
} from '@ant-design/icons'
import CardWrapper from './styled'
import { useNavigate } from 'react-router-dom'
import { ITextType } from '@/types/text'
import { IQuestionType } from '@/types/question'

interface IProps extends IQuestionType {
  children?: ReactNode
}

const QuestionCard: FC<IProps> = (props) => {
  const nav = useNavigate()
  function goPage() {
    props.isPublished
      ? nav(`/question/stat/${props._id}`)
      : nav(`/question/edit/${props._id}`)
  }
  return (
    <CardWrapper>
      <Card
        title={
          <Button type="link" onClick={() => goPage()}>
            {props.title}
          </Button>
        }
        extra={
          <Space>
            <Tag color={props.isPublished ? 'success' : 'processing'}>
              {props.isPublished ? '已发布' : '未发布'}
            </Tag>
            <span>答卷: {props.answerCount}</span>
            <span>{props.screatedAt}</span>
          </Space>
        }
      >
        <div className="content">
          <Space>
            <Button
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${props._id}`)}
              icon={<EditOutlined />}
            >
              编辑问卷
            </Button>
            <Divider type="vertical" />
            <Button
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${props._id}`)}
              icon={<LineChartOutlined />}
            >
              问卷统计
            </Button>
          </Space>
          <Space>
            <Button
              type="text"
              size="small"
              icon={
                props.isStar ? (
                  <StarTwoTone twoToneColor="#fadb14" />
                ) : (
                  <StarOutlined />
                )
              }
            >
              {props.isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title={ITextType.copyQuestionTitle}
              description={ITextType.copyQuestionDescription}
              onConfirm={() => console.log('111')}
              okText={ITextType.confirm}
              cancelText={ITextType.cancel}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Popconfirm
              title={ITextType.deleteQuestionTitle}
              description={ITextType.deleteQuestionDescription}
              onConfirm={() => console.log('111')}
              okText={ITextType.confirm}
              cancelText={ITextType.cancel}
            >
              <Button type="text" size="small" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </Card>
    </CardWrapper>
  )
}

export default memo(QuestionCard)

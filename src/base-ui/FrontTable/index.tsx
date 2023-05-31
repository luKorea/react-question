import { Table } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  data: any[]
  columns?: any[]
  bordered?: boolean
  rowKey?: string | ((record: any) => string)
}

const FrontTable: FC<IProps> = (props) => {
  return (
    <Table
      bordered={props.bordered}
      dataSource={props.data}
      columns={props.columns}
      rowKey={props.rowKey}
      pagination={false}
    />
  )
}

export default memo(FrontTable)

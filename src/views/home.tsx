import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Home: React.FC<IProps> = () => {
  return <div>demo</div>
}

export default memo(Home)

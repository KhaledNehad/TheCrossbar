import { ReactNode } from 'react'
interface ContainerProps {
  children: ReactNode | ReactNode[]
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mainContainer">{children}</div>
}

export default Container

import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-main-1 text-3xl md:text-5xl lg:text-5xl tracking-tighter md:leading-none mb-12 text-center">
      {children}
    </h1>
  )
}

export default PostTitle

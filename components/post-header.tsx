import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-main-1 max-w-2xl mx-auto">
        <div className="text-sub-1 mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader

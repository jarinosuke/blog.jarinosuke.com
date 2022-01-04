import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-3 leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-main-1 dark:text-dark-main-1 hover:underline">{title}</a>
        </Link>
      </h3>
      <div className=" text-sub-1 dark:text-dark-sub-1 text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostPreview

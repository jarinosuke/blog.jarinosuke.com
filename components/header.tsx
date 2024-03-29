import Link from 'next/link'
import { BLOG_TITLE } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-main-1 dark:text-dark-main-1 text-1xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{BLOG_TITLE}</a>
      </Link>
    </h2>
  )
}

export default Header

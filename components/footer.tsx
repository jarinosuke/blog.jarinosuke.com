import Container from './container'
import { BLOG_TITLE } from '../lib/constants'
import Link from 'next/link'
import Head from 'next/head'

const Footer = () => {
  return (
    <footer className="bg-accent-1 dark:bg-dark-accent-1 border-t dark:border-sub-1">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3 className="text-1xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <Link href="/">
              <a className="text-main-1 dark:text-dark-main-1 hover:underline">{BLOG_TITLE}</a>
            </Link>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/jarinosuke`}
              className="text-main-1 dark:text-dark-main-1 mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
            <a
              href={`https://twitter.com/jarinosuke`}
              className="text-main-1 dark:text-dark-main-1 mx-3 font-bold hover:underline"
            >
              Twitter 
            </a>
            <a
              href={`https://www.linkedin.com/in/jarinosuke/`}
              className="text-main-1 dark:text-dark-main-1 mx-3 font-bold hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

import { BLOG_TITLE } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-6">
      <h1 className="text-main-1 dark:text-dark-main-1 text-1xl md:text-4xl tracking-tighter font-bold  md:pr-8">
        {BLOG_TITLE}
      </h1>
    </section>
  )
}

export default Intro

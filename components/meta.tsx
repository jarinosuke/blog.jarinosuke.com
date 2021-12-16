import Head from 'next/head'
import { BLOG_TITLE } from '../lib/constants'

type Props = {
  slug?: string
}

const Meta = ( { slug }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${BLOG_TITLE}.`}
      />
      <meta property="og:image" content={`${baseUrl}/ogp/${slug}.png`} />
      <meta name="twitter:image" key="twitterImage" content={`${baseUrl}/ogp/${slug}.png`} />
    </Head>
  )
}

export default Meta

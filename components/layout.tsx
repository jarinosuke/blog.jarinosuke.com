import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
  slug?: string
}

const Layout = ({ preview, children, slug }: Props) => {
  return (
    <>
      <Meta
        slug={slug}
      />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

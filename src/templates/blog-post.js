import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import _ from "lodash"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null
  const tags = post.frontmatter.tags

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={location.pathname}
      />
      <article>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p className="date">
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(0.5),
          }}
        />
        Tags
        {tags.map(tag => {
          return (
            <li key={tag}>
              <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
            </li>
          )
        })}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <bio>
            <Bio />
          </bio>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          username
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        date(formatString: "YYYY/MM/DD")
        tags
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
 const siteTitle = data.site.siteMetadata.title
 const posts = data.allMarkdownRemark.edges

 return (
   <Layout location={location} title={siteTitle}>
     <SEO title="All posts" />
     <bio><Bio /></bio>
     {posts.map(({ node }) => {
       const title = node.frontmatter.title || node.fields.slug
       return (
         <article key={node.fields.slug}>
           <header>
             <h3 style={{ marginBottom: rhythm(1 / 20), fontWeight: "normal" }} >
               <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                 {title}
               </Link>
             </h3>
             <p className="date">{node.frontmatter.date}</p>
           </header>
         </article>
       )
     })}
   </Layout>
 )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

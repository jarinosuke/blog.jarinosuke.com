import React from "react"
import { Link, graphql } from "gatsby"

import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const group = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
    <SEO title="All tags" />
    <bio><Bio /></bio>
    <h1>All tags</h1>
    <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    
  </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
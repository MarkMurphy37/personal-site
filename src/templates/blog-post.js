import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import '../scss/templates/blog-post.scss'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
      <Layout>
        <Helmet title={`${post.frontmatter.title} - Mark Murphy`} />
        <div className="blog-post-wrapper">
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
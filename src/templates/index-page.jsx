import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Creativecarousel } from "./Creative-carousel"

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 1
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => edge.node)
  return (
    <Layout className="main-page" location={location}>
      <SEO />
      <Creativecarousel data={posts} />
    </Layout>
  )
}

export default HomePage

import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import { RiArrowRightSLine } from "react-icons/ri"

// import BlogListHome from "../components/blog-list-home"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Creativecarousel } from "./Creative-carousel"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 380
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data, location }) => {
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  // const Image = frontmatter.featuredImage
  //   ? frontmatter.featuredImage.childImageSharp.fluid
  //   : ""
  return (
    <Layout className="main-page" location={location}>
      <SEO />
      <Creativecarousel />
      {/* <div className="home-banner grids col-1 sm-2">
          <div>
            <h1 className="title">{frontmatter.title}</h1>
            <p className="tagline">{frontmatter.tagline}</p>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to={frontmatter.cta.ctaLink} className="button">
              {frontmatter.cta.ctaText}
              <span class="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
          <div>
            {Image ? (
              <Img
                fluid={Image}
                alt={frontmatter.title + " - Featured image"}
                className="featured-image"
              />
            ) : (
              ""
            )}
          </div>
        </div> */}
      {/* <BlogListHome /> */}
    </Layout>
  )
}

export default HomePage
import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import SplitText from "react-pose-text"
const charPoses = {}

class SectionBlog extends Component {
  render() {
    const { data } = this.props
    console.log("section blog : ", data[0])
    // const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, excerpt } = data[0]
    // const frontmatter = data[0].frontmatter
    // const html = data[0].html
    console.log("frontmatter : ", frontmatter)
    const Image = frontmatter.featuredImage
      ? frontmatter.featuredImage.childImageSharp.fluid
      : ""
    return (
      <div className="section fp-section fp-tabble fp-auto-height-responsive">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>
                      {frontmatter.date}
                    </SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      {frontmatter.title}
                    </SplitText>
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                  <Link to={frontmatter.slug} className="button">
                    Découvrir le blog
                    <span className="icon -right">
                      <RiArrowRightSLine />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionBlog

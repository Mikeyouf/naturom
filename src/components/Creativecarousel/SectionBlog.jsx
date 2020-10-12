// import React from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import { RiArrowRightSLine } from "react-icons/ri"

// const SectionBlog = ({ data }) => {
// const { markdownRemark } = data // data.markdownRemark holds your post data
// const { frontmatter, html } = markdownRemark
// const Image = frontmatter.featuredImage
//   ? frontmatter.featuredImage.childImageSharp.fluid
//   : ""
//   return (
//     <div className="home-banner grids col-1 sm-2">
//       <div>
//         <h1 className="title">{frontmatter.title}</h1>
//         <p className="tagline">{frontmatter.tagline}</p>
//         <div
//           className="description"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//         <Link to={frontmatter.cta.ctaLink} className="button">
//           {frontmatter.cta.ctaText}
//           <span class="icon -right">
//             <RiArrowRightSLine />
//           </span>
//         </Link>
//       </div>
//       <div>
//         {Image ? (
//           <Img
//             fluid={Image}
//             alt={frontmatter.title + " - Featured image"}
//             className="featured-image"
//           />
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   )
// }

// export default SectionBlog

import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import SplitText from "react-pose-text"
const charPoses = {}

class SectionBlog extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const Image = frontmatter.featuredImage
      ? frontmatter.featuredImage.childImageSharp.fluid
      : ""
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>
                      {frontmatter.title}
                    </SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      {frontmatter.tagline}
                    </SplitText>
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                  <Link to={frontmatter.cta.ctaLink} className="button">
                    {frontmatter.cta.ctaText}
                    <span class="icon -right">
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

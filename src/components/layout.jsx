import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import NavbarThree from "./Navbar/NavbarThree"

import "../assets/scss/style.scss"

// const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         siteTitle: title
//       }
//     }
//   }
// `

const Layout = ({ children, className, location }) => {
  // const { site } = useStaticQuery(query)
  // const { siteTitle } = site.siteMetadata
  return (
    <>
      <NavbarThree mainlogo="logo-naturo.png" location={location} />
      {location.pathname === "/" ? (
        <div
          className="primary-container section_bg"
          style={{
            background: "linear-gradient( 90deg, #255559 0%, #4e8f93 100%)",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
            bottom: "0",
            zIndex: "-10",
          }}
        >
          <ul
            data-relative-input="true"
            className="list-unstyled memphis"
            id="scene"
          >
            <li>
              <img
                srcSet={require("../image/new-page/line1-gold.png")}
                alt=""
              />
            </li>
            <li>
              <img
                srcSet={require("../image/new-page/line2-gold.png")}
                alt=""
              />
            </li>
            <li>
              <img
                srcSet={require("../image/new-page/line3-gold.png")}
                alt=""
              />
            </li>
            <li>
              <img
                srcSet={require("../image/new-page/topshape2-gold.png")}
                alt=""
              />
            </li>
            <li>
              <img
                className="layer layer2"
                data-depth="0.2"
                srcSet={require("../image/new-page/zen-1.png")}
                alt=""
              />
            </li>
            <li>
              <img srcSet={require("../image/new-page/zen-2.png")} alt="" />
            </li>
            <li>
              <img
                srcSet={require("../image/new-page/bottomshape.png")}
                alt=""
              />
            </li>
            <li>
              <img srcSet={require("../image/new-page/zen-3.png")} alt="" />
            </li>
            <li>
              <img srcSet={require("../image/new-page/shape3.png")} alt="" />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <main className={"container " + className}>{children}</main>
        </div>
      ) : (
        <div className="primary-container section_bg">
          <main className={"container " + className}>{children}</main>
        </div>
      )}
    </>
  )
}

export default Layout

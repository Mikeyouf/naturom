import React from "react"
// import "fullpage.js/vendors/scrolloverflow"
import ReactFullpage from "@fullpage/react-fullpage"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import SectionNaturopathe from "./SectionNaturopathe"
import SectionFleurs from "./SectionFleurs"
import jhonData from "../jhonData"
import SectionBlog from "./SectionBlog"

const FullpageSlider = fullpageProps => {
  return (
    <div className="scroll_page">
      <ReactFullpage
        {...fullpageProps}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionOne smallText="Naturopathe" />
              <SectionTwo />
              <SectionThree />
              <SectionNaturopathe />
              <SectionFleurs />
              <SectionBlog data={fullpageProps.data} />
              <SectionFour jhonData={jhonData} />
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default FullpageSlider

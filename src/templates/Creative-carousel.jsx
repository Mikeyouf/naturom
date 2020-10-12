import React from "react"
import FullpageSlider from "../components/Creativecarousel/FullpageSlider"
import fullpageOptions from "../components/Creativecarousel/fullpageConfig"

export const Creativecarousel = () => (
  <React.Fragment>
    <FullpageSlider
      // isFooterOpen={this.state.isFooterOpen}
      // hide={this.hide}
      // show={this.show}
      {...fullpageOptions}
    />
  </React.Fragment>
)

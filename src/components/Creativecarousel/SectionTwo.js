import React, { Component } from "react"
import SplitText from "react-pose-text"
import "./style.scss"

const charPoses = {}

class SectionTwo extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble fp-auto-height-responsive ">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Qui suis-je ?</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>Allison</SplitText>
                  </h2>
                  <h2 className="bold">
                    <SplitText charPoses={charPoses}>Naturopathe</SplitText>
                  </h2>
                  <p>
                    Diplômée de la Haute école de Naturopathe, je vous propose
                    un accompagnement au naturel dans la prise en charge de vos
                    maux.
                  </p>
                  <a href="#/" className="see_btn" data-text="See Projects">
                    Découvrez mes prestations
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/allison.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTwo

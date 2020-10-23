import React, { Component } from "react"
import SplitText from "react-pose-text"
const charPoses = {}

class SectionOne extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one fp-auto-height-responsive ">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>
                      Allison Naturopathe
                    </SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Bien être au naturel
                    </SplitText>
                  </h2>
                  <p>
                    La Naturopathie est un ensemble de méthodes de soins visant
                    à renforcer les défenses de l'organisme par des moyens
                    considérés comme naturels et biologiques.
                  </p>
                  <a href="/blog" className="see_btn" data-text="See Projects">
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
                    src={require("../../image/new-page/home-5.png")}
                    alt="naturopathie"
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

export default SectionOne

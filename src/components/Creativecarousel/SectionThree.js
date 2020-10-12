import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};
class SectionThree extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_three">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Mes prestations</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Une solution à chaque problème!
                    </SplitText>
                  </h2>
                  <p>
                    Naturopathie, Fleurs de Bach, Massage bien-être, Réflexologie plantaires.
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
                    src={require("../../image/new-page/allison-2.jpg")}
                    alt="prestation de massage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;

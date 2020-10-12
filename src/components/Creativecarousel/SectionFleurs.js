import React, { Component } from "react";
import SplitText from "react-pose-text";
const charPoses = {};

class SectionOne extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Fleurs de Bach</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Une fleur - une émotion
                    </SplitText>
                  </h2>
                  <p>
                  Les fleurs de Bach désignent des élixirs floraux créés par le Dr Bach au XIXe siècle. 
                  Ses 38 élixirs aident à traiter les états émotionnels négatifs comme le stress ou les 
                  troubles du sommeil.
                  </p>
                  {/* <a href="#/" className="see_btn" data-text="See Projects">
                    Découvrez mes prestations
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/fleurs-bach.webp")}
                    alt=""
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

export default SectionOne;

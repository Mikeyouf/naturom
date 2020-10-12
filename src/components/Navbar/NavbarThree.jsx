import React, { Component } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

class NavbarThree extends Component {
  constructor() {
    super()
    this.state = {
      isExpanded: false,
    }
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  render() {
    // const { mainlogo } = this.props;
    const { pathName } = this.props
    // console.log(location)
    return (
      <React.Fragment>
        <header className="header_area_one p_absoulte">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-9 col-7">
                <div className="menu_left">
                  <a href="/" className="logo">
                    <img
                      src={require("../../image/logo-naturo.png")}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-5">
                <div className="menu_right">
                  <div
                    className="burger_menu"
                    style={{ color: pathName === "/" ? "#ffffff" : "black" }}
                  >
                    <span className="text" data-text="menu"></span>
                    <div
                      id="nav-icon2"
                      role="presentation"
                      className={this.state.isExpanded ? "open" : ""}
                      onClick={() => this.handleToggle()}
                    >
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                      <span
                        style={{
                          background: pathName === "/" ? "#ffffff" : "black",
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className={
            this.state.isExpanded ? "offcanvas_menu open" : "offcanvas_menu"
          }
        >
          <div
            className="closer_icon"
            onClick={() => this.handleToggle()}
            role="presentation"
          >
            <i className="icon_close"></i>
          </div>
          <div className="menu_body">
            <div className="menu_title">
              <h2>Allison Naturopathe</h2>
              <p>"C'est la nature qui guérit les malades" -Hippocrate</p>
            </div>
            <div className="off_menu">
              <ul id="menu" className="nav">
                <li data-menuanchor="Presentation" className="">
                  {pathName === "/" ? (
                    <a href="#Presentation">Présentation</a>
                  ) : (
                    <AnchorLink to="/#Presentation">Présentation</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Propos" className="">
                  {pathName === "/" ? (
                    <a href="#A-Propos">A propos</a>
                  ) : (
                    <AnchorLink to="/#A-Propos">A propos</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Prestations" className="">
                  {pathName === "/" ? (
                    <a href="#Prestations">Prestations</a>
                  ) : (
                    <AnchorLink to="/#Prestations">Prestations</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Naturopathie" className="">
                  {pathName === "/" ? (
                    <a href="#Naturopathie">Naturopathie</a>
                  ) : (
                    <AnchorLink to="/#Naturopathie">Naturopathie</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Fleurs" className="">
                  {pathName === "/" ? (
                    <a href="#Fleurs">Fleurs de Bach</a>
                  ) : (
                    <AnchorLink to="/#Fleurs">Fleurs</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Article" className="">
                  {pathName === "/" ? (
                    <a href="#Article">Dernier article</a>
                  ) : (
                    <AnchorLink to="/#Article">Dernier article</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Contact" className="">
                  {pathName === "/" ? (
                    <a href="#Contact">Contact</a>
                  ) : (
                    <AnchorLink to="/#Contact">Contact</AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Blog" className="">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="copy_right_menu">
              <p>
                © <a href="/#">Onaturel</a> 2020. Tout droits réservé crée par
                Mik@el
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default NavbarThree

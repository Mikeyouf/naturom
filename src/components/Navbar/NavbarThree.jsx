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
    const { location } = this.props
    return (
      <React.Fragment>
        <header className="header_area_one p_absoulte">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-9 col-7">
                <div className="menu_left">
                  <a href="/" className="logo">
                    <img
                      src={require("../../image/logo-naturo-4-maron.png")}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-5">
                <div className="menu_right">
                  <div className="burger_menu">
                    <span className="text" data-text="menu"></span>
                    <div
                      id="nav-icon2"
                      role="presentation"
                      className={this.state.isExpanded ? "open" : ""}
                      onClick={() => this.handleToggle()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
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
                  {location.pathname === "/" ? (
                    <a href="#Presentation" onClick={() => this.handleToggle()}>
                      Présentation
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Presentation"
                      onClick={() => this.handleToggle()}
                    >
                      Présentation
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Propos" className="">
                  {location.pathname === "/" ? (
                    <a href="#A-Propos" onClick={() => this.handleToggle()}>
                      A propos
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#A-Propos"
                      onClick={() => this.handleToggle()}
                    >
                      A propos
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Prestations" className="">
                  {location.pathname === "/" ? (
                    <a href="#Prestations" onClick={() => this.handleToggle()}>
                      Prestations
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Prestations"
                      onClick={() => this.handleToggle()}
                    >
                      Prestations
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Naturopathie" className="">
                  {location.pathname === "/" ? (
                    <a href="#Naturopathie" onClick={() => this.handleToggle()}>
                      Naturopathie
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Naturopathie"
                      onClick={() => this.handleToggle()}
                    >
                      Naturopathie
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Fleurs" className="">
                  {location.pathname === "/" ? (
                    <a href="#Fleurs" onClick={() => this.handleToggle()}>
                      Fleurs de Bach
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Fleurs"
                      onClick={() => this.handleToggle()}
                    >
                      Fleurs
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Article" className="">
                  {location.pathname === "/" ? (
                    <a href="#Article" onClick={() => this.handleToggle()}>
                      Dernier article
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Article"
                      onClick={() => this.handleToggle()}
                    >
                      Dernier article
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Contact" className="">
                  {location.pathname === "/" ? (
                    <a href="#Contact" onClick={() => this.handleToggle()}>
                      Contact
                    </a>
                  ) : (
                    <AnchorLink
                      to="/#Contact"
                      onClick={() => this.handleToggle()}
                    >
                      Contact
                    </AnchorLink>
                  )}
                </li>
                <li data-menuanchor="Blog" className="">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="copy_right_menu">
              <p>
                © Onaturel 2020. Tout droits réservé crée par
                <a
                  href="/https://www.antoine-mikael.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mik@el
                </a>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default NavbarThree

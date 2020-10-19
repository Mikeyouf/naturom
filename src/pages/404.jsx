import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = ({ location }) => (
  <Layout className="not-found-page" location={location}>
    <SEO title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Oups, cette page n'existe pas.</h1>
        <p>
          Have you wondered into the unknow. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Retour à la page d'accueil
      </Link>
      <Link to="/contact" className="button -outline">
        Contactez nous <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound

import React from "react"
import emailjs from "emailjs-com"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
    }
  }

  handleChange = event => {
    let name = event.target.name
    let value = event.target.value
    let errors = this.state.errors

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Veuillez renseigner votre nom" : ""
        break
      case "subject":
        errors.subject =
          value.length < 5 ? "Le titre doit faire 5 caractères minimum" : ""
        break
      case "phone":
        errors.phone =
          value.length < 5 ? "Veuillez renseigner votre téléphone" : ""
        break
      case "email":
        errors.email = value.length < 5 ? "Veuillez renseigner le titre" : ""
        let appos = value.indexOf("@")
        let dots = value.lastIndexOf(".")

        if (appos < 1 || dots - appos < 2) {
          errors.email = "Svp, entrez un email valide"
        }

        break

      default:
        break
    }
    this.setState({ errors, [name]: value })
  }

  submitHandler = e => {
    e.preventDefault()
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }
    emailjs
      .sendForm(
        "gmail",
        "template_zo1q2mh",
        e.target,
        "user_IQA3Kt9CTe6MruRw8BFf2"
      )
      .then(
        result => {
          console.log(result.text)
          alert("Formulaire validé")
        },
        error => {
          console.log(error.text)
          alert("Formulaire invalide")
        }
      )
  }

  render() {
    const { errors } = this.state
    return (
      <form onSubmit={this.submitHandler.bind(this)} className="form_class">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Votre nom*"
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Votre Email*"
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Titre*"
              onChange={this.handleChange}
            />
            <p>{errors.subject}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Téléphone*"
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Votre Message ..."
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="btn send_btn theme_btn">
          Envoyer le message
        </button>
      </form>
    )
  }
}

export default Form

import React, { Component } from 'react';
import './FormFrCss.css';


// import { FormGroup, Button, Input, Col } from 'reactstrap';


// function FormFr() {
//   return (
//     <FormGroup id="client">
//       <div class = "titre">
//         Formulaire
//       </div>
//       <Col sm={4}>
//         <Input type="text" id="name" name="name" placeholder="Nom *" required />
//         <Input type="text" id="firstname" name="firstname" placeholder="Prénom *" required />
//         <Input type="email" id="email" name="email" placeholder="E-mail *" required />
//         <Input
//           type="tel"
//           id="phone"
//           name="phone"
//           placeholder="Téléphone"
//           pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
//         />
//       </Col>
//       <Col sm={6}>
//         <Input type="textarea" name="Text" id="message" placeholder="Message *" />
//       </Col>
//       <Button> Envoyer </Button>
//     </FormGroup>
//   );
// }

class FormFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: null,
      firstname: null,
      mail: null,
      phonenumber: null,
      message: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  SubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="Form">
        <div>
          <h1 className="title">Formulaire</h1>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="block">
            <label htmlFor="lastname"></label>
            <input
              type="text"
              placeholder="Votre nom *"
              name="lastname"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              placeholder="Votre prénom *"
              name="firstname"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="mail"></label>
            <input
              type="text"
              placeholder="Votre e-mail *"
              name="mail"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="phonenumber"></label>
            <input
              type="text"
              placeholder="Votre numéro téléphone"
              name="phonenumber"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="Ecrivez-nous"></label>
            <input
              type="text"
              placeholder="Un message"
              name="message"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="sendButton">
            <button>Envoyer</button>
          </div>
        </form>
      </div>
    );
  }
}



export default FormFr;

import React, { Component } from 'react';
import './FormEsCss.css';

class FormEs extends Component {
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
          <h1 className="title">Formulario</h1>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="block">
            <label htmlFor="lastname"></label>
            <input
              type="text"
              placeholder="Su nombre *"
              name="lastname"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              placeholder="Su apellido *"
              name="firstname"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="mail"></label>
            <input
              type="text"
              placeholder="Su email *"
              name="mail"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="phonenumber"></label>
            <input
              type="text"
              placeholder="Su número de teléfono"
              name="phonenumber"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="block">
            <label htmlFor="Ecrivez-nous"></label>
            <input
              type="text"
              placeholder="Un mensaje"
              name="message"
              onChange={this.onChange} />
            <br />
          </div>

          <div className="sendButton">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}



export default FormEs;

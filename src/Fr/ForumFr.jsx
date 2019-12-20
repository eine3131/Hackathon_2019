import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import React from 'react';
import './ForumFr.css';

const ForumFr = (props) => {
  return (
    <Form className="form-container">
      <h1 className="foire">Foire aux questions</h1>
      <FormGroup className="form-titre">
        <Label for="Titre">Titre :</Label>
        <Input className="foire-titre" type="text" name="title" id="" />
      </FormGroup>
      <FormGroup className="form-text">
        <Label for="exampleText">Question :</Label>
        <Input className="foire-text" type="textarea" name="text" id="" />
      </FormGroup>
      <Button className="foire-bouton">Posez votre question</Button>
    </Form>
  );
}

export default ForumFr;
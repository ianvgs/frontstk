import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Footer= (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Ian Guedes Developer</h1>
          <p className="lead">Tecnologias do Projeto: React, bootstrap, Node.js, Express, Axios, Consign e outros.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
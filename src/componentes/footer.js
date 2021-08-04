import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import  '../App.css';

const Footer= (props) => {
  return (
    <div  >
      <Jumbotron  fluid>
        <Container fluid>
          <h1 >Ian Guedes Developer</h1>
          <p>Tecnologias do Projeto: React, bootstrap, Node.js, Express, Axios, Consign e outros.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
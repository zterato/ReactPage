import './css/style.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import logo from './img/rodape.png';


const Footer = (props) => {
  return (
      <div className="rodape">
    <Container fluid className="roda1">
      <Row>
      {/* titulo centro */}
          <center><h3>Cursos da Graduação</h3></center>
      {/* Lado esquerdo */}
        <Col sm={2}>
           <img src={logo} className="img img-fluid imgrodape"></img>
        </Col>
        <Col sm={1}></Col>
      {/* Centro */}
        <Col sm={3}>
        
           <ul>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
           </ul>
       
        </Col>
      {/* Lado direito*/}
      <Col sm={3}>
        
        <ul>
            <li>Ciência da Computação</li>
            <li>Ciência da Computação</li>
            <li>Ciência da Computação</li>
            <li>Ciência da Computação</li>
            <li>Ciência da Computação</li>
        </ul>
    
     </Col>
     <Col sm={3}>
        
           <ul>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
               <li>Ciência da Computação</li>
           </ul>
       
        </Col>
       </Row>
      
    </Container>
    </div>
  );
}



export default Footer;
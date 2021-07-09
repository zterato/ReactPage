import './css/style.css'
import React, { useState } from 'react';
import logo from './img/banner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { View, TextInput, Text, Button, Form, FormGroup, Label, Input, FormTextButton, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Article = (props) => {
    
    const {
        buttonLabel,
        className
      } = props;
      const [modal, setModal] = useState(false);
      const [backdrop, setBackdrop] = useState(true);
      const [keyboard, setKeyboard] = useState(false);
      const [nome,setNome]=useState("");
     
    
      const toggle = () => setModal(!modal);
      
    
      const FecharCaixa = e => {
        let value = 'static';
        setNome(e.target.value);
        setBackdrop(value);
        
      }
    
     
    
  return (
      

    
      <div className="novocorpo">
    <Container >
      <Row>
      {/* Lado esquedo do sistema */}
        <Col sm={5}>
            
            <h3 className="titulo1">Captações 2021.2</h3>
            <h1 className="titulo2">Formas de Ingresso</h1>
            <p className="ttp">A Universidade Zilvan é uma universidade que pensa no seu futuro. Por isso, investimos em inovação, constantemente, tanto na oferta de cursos de graduação e pós-graduação quanto na infraestrutura que apoia sua formação.</p>

            <p className="ttp">Com um corpo docente experiente, formado, em sua maioria, por mestres e doutores, procuramos promover uma educação superior de qualidade, alinhada às necessidades do mercado de trabalho.</p>
            <Row>
              <Col sm={8}>
              <FormGroup>
                <Input  onChange={FecharCaixa} value={nome} type="text" name="nome" id="nome" placeholder="Digite seu Nome:" />
              </FormGroup>
              </Col>
              <Col sm={4}>
              <FormGroup>
                <Button onClick={toggle} color="primary" className="bt1">Enviar</Button>{' '}
              </FormGroup>
              </Col>
              </Row>
        <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {/* Recebendo nome do campo de texto */}
          <p>{nome}</p>
          <br></br>
          <h1>Bem Vindo a Universidade!</h1>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
        </Modal>
        </Col>
      {/* fim do lado esquerdo */}
      {/* Lado direito do sistema */}
        <Col sm={7}>
            <img src={logo}  className="img img-fluid banner" alt="banner"></img>
        </Col>
      {/* fim do lado direito do sistema */}
      </Row>
      
    </Container>
    </div>
  );
}


export default Article;
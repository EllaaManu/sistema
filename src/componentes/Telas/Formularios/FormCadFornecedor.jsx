import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

export default function FormCadFornecedor(props) {

    const [formValidado, setFormValidado] = useState(false);
    const fornecedorReseta = {
        codigo:0,
        nome:"",
        cnpj: "",
        contato: "",
        localizacao: ""
    }

    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if (form.checkValidity()){
            if(!props.modoEdicao){
            props.setListaFornecedor([...props.listaFornecedor, props.fornecedorSelecionado]);
            
           
            window.alert("Fornecedor inserido com sucesso!");
            props.setExibirFornecedor(true);
        } else{
            props.setListaFornecedor(props.listaFornecedor.map((item) =>
              item.codigo === props.fornecedorSelecionado.codigo ? props.fornecedorSelecionado
             : item
            ));
            window.alert("fornecedor atualizado com sucesso!");
            props.setFornecedorSelecionado(fornecedorReseta);
            props.setModoEdicao(false);
            props.setExibirFornecedor(true);
          }
        }
        else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
      }

      function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor    = evento.target.value; 
        props.setFornecedorSelecionado({...props.fornecedorSelecionado, [elemento]:valor});
    }
    return (

        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
            <Col>
              {/* ########## Código ########## */}
              <Form.Group className="mb-3">
                <Form.Label>Código</Form.Label>
                <Form.Control disabled={props.modoEdicao} required type="number" id="codigo" name="codigo" value={props.fornecedorSelecionado.codigo} onChange={manipularMudanca} placeholder="Código" />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe o código do fornecedor!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
          {/* ########## nome ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Nome:</Form.Label>
            <Form.Control required type="text" id="nome" name="nome" value={props.fornecedorSelecionado.nome} onChange={manipularMudanca} placeholder="Nome:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a nome do fonecedor!
            </Form.Control.Feedback>
          </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            {/* ########## cnpj ########## */}
            <Form.Group className="mb-3">
                <Form.Label>CNPJ:</Form.Label>
                <Form.Control required type="text" id="cnpj" name="cnpj" value={props.fornecedorSelecionado.cnpj} onChange={manipularMudanca} placeholder="CNPJ:" />
                <Form.Control.Feedback type="invalid">
                Por favor, informe o CNPJ do fornecedor!
              </Form.Control.Feedback>
              <Form.Label>Contato:</Form.Label>
              <Form.Control required type="text" id="contato" name="contato" value={props.fornecedorSelecionado.contato} onChange={manipularMudanca} placeholder="Contato:" />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o contato do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
            </Col>
            
            <Col>
            {/* ########## localizacao ########## */}
            <Form.Group className="mb-3">
                <Form.Label>Localizacao:</Form.Label>
                <Form.Control required type="text" id="localizacao" name="localizacao" value={props.fornecedorSelecionado.localizacao} onChange={manipularMudanca} placeholder="Localizacao:" />
                <Form.Control.Feedback type="invalid">
                Por favor, informe o localizacao do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
            </Col>
            </Row>

                    <Row className="mt-2 mb-2">
                <Col md={1}>
                <Button id="botao" type="submit" variant="success">
                    Confirmar
                </Button>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                <Button
                    onClick={() => {
                      props.setExibirFornecedor(true);
                      props.setFornecedorSelecionado(fornecedorReseta);
                    }}
                    type="button"
                    variant="success"
                >
                    Voltar
                </Button>
                </Col>
            </Row>
            </Form>

        
    );  
}
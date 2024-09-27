import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

export default function FormCadCategorias(props) {
    const [formValidado, setFormValidado] = useState(false);
    const categoriaReseta = {
        codigo:0,
        descricao:"",
        datacriacao:"",
        ultimaAtualizacao:"",
        totalprodutos:0,
        status:""
    }

    function manipularSubmissao(evento){
      const form = evento.currentTarget;
      if (form.checkValidity()){
          if(!props.modoEdicao){
          props.setListaCategoria([...props.listaCategoria, props.categoriaSelecionada]);
          
         
          window.alert("Categoria inserida com sucesso!");
          props.setExibirCategoria(true);
      } else{
          props.setListaCategoria(props.listaCategoria.map((item) =>
            item.codigo === props.categoriaSelecionada.codigo ? props.categoriaSelecionada
           : item
          ));
          window.alert("Categoria atualizada com sucesso!");
          props.setCategoriaSelecionada(categoriaReseta);
          props.setModoEdicao(false);
          props.setExibirCategoria(true);
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
      props.setCategoriaSelecionada({...props.categoriaSelecionada, [elemento]:valor});
  }


  return (

    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row>
        <Col>
          {/* ########## Código ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control disabled={props.modoEdicao} required type="number" id="codigo" name="codigo" value={props.categoriaSelecionada.codigo} onChange={manipularMudanca} placeholder="Código" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o código da categoria!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Descrição ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control required type="text" id="descricao" name="descricao" value={props.categoriaSelecionada.descricao} onChange={manipularMudanca} placeholder="Descrição:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a descrição do categoria!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col>
          {/* ########## Validade ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Criada em: </Form.Label>
            <Form.Control required type="date" id="dataCriacao" name="dataCriacao" value={props.categoriaSelecionada.dataCriacao} onChange={manipularMudanca} placeholder="Criada em:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a data de criação!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Ultima Atualização ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Atualizada pela ultima vez em: </Form.Label>
            <Form.Control required type="date" id="ultimaAtualizacao" name="ultimaAtualizacao" value={props.categoriaSelecionada.ultimaAtualizacao} onChange={manipularMudanca} placeholder="Atualizada pela ultima vez em:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a ultima atualização!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        </Row>
        <Row>
            <Col>
            {/* ########## Status ########## */}
            <Form.Group className="mb-3">
                <Form.Label>Status:</Form.Label>
                <Form.Control required type="text" id="status" name="status" value={props.categoriaSelecionada.status} onChange={manipularMudanca} placeholder="Status:" />
                <Form.Control.Feedback type="invalid">
                Por favor, informe o status da categoria!
                </Form.Control.Feedback>
            </Form.Group>
            </Col>
            <Col>
            {/* ########## Estoque ########## */}
            <Form.Group className="mb-3">
                <Form.Label>Estoque:</Form.Label>
                <Form.Control required type="number" id="totalProdutos" name="totalProdutos" value={props.categoriaSelecionada.totalProdutos} onChange={manipularMudanca} placeholder="Total de produtos na categoria:" />
                <Form.Control.Feedback type="invalid">
                Por favor, informe a quantidade em estoque desta categoria!
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
              props.setExibirCategoria(true);
              props.setCategoriaSelecionada(categoriaReseta);
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

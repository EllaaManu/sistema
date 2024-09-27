import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadProdutos(props) {
    const [formValidado, setFormValidado] = useState(false);
    const produtoReseta = {
        codigo:0,
        descricao:"",
        precoCusto:0,
        precoVenda:0,
        qtdEstoque:0,
        urlImagem:"",
        dataValidade:""

    }


    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if (form.checkValidity()){
            if(!props.modoEdicao){
            props.setListaProdutos([...props.listaProdutos, props.produtoSelecionado]);
            
            //exibir tabela com o produto incluído
            window.alert("Produto inserido com sucesso!");
            props.setExibirTabela(true);
        } else{
            props.setListaProdutos(props.listaProdutos.map((item) =>
              item.codigo === props.produtoSelecionado.codigo ? props.produtoSelecionado : item
            ));
            window.alert("Produto atualizado com sucesso!");
            props.setProdutoSelecionado(produtoReseta);
            props.setModoEdicao(false);
            props.setExibirTabela(true);
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
        props.setProdutoSelecionado({...props.produtoSelecionado, [elemento]:valor});
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row>
        <Col>
          {/* ########## Código ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control disabled={props.modoEdicao} required type="number" id="codigo" name="codigo" value={props.produtoSelecionado.codigo} onChange={manipularMudanca} placeholder="Código" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o código do produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Validade ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Válido até: </Form.Label>
            <Form.Control required type="date" id="dataValidade" name="dataValidade" value={props.produtoSelecionado.dataValidade} onChange={manipularMudanca} placeholder="Válido até:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a data de validade!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Descrição ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control required type="text" id="descricao" name="descricao" value={props.produtoSelecionado.descricao} onChange={manipularMudanca} placeholder="Descrição:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a descrição do produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## Preço Custo ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Preço de Custo:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Preço de Custo:"
              id="precoCusto"
              name="precoCusto"
              value={props.produtoSelecionado.precoCusto}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de custo deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Preço Venda ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Preço de Venda:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Preço de Venda:"
              id="precoVenda"
              name="precoVenda"
              value={props.produtoSelecionado.precoVenda}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de venda deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          {/* ########## Estoque ########## */}
          <Form.Group className="mb-3">
            <Form.Label>Estoque:</Form.Label>
            <Form.Control required type="number" id="qtdEstoque" name="qtdEstoque" value={props.produtoSelecionado.qtdEstoque} onChange={manipularMudanca} placeholder="Estoque:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a quantidade em estoque deste produto!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* ########## URL Imagem ########## */}
          <Form.Group className="mb-3">
            <Form.Label>URL da Imagem:</Form.Label>
            <Form.Control required type="url" id="urlImagem" name="urlImagem" value={props.produtoSelecionado.urlImagem} onChange={manipularMudanca} placeholder="URL da Imagem:" />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a url da imagem deste produto!
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
                props.setExibirTabela(true);
                props.setProdutoSelecionado(produtoReseta);
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
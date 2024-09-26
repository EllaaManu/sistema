import { useState } from "react";
import {
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap";

export default function FormCadClientes(props) {
    const [formValidado, setFormValidado] = useState(false);
    const clienteReseta = {
        codigo: 0,
        nome: "",
        cpf: "",
        email: "",
        urlImagem: ""
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) { // aqui acontece a submissao
                props.setListaCliente([...props.listaCliente, props.clienteSelecionado])

                window.alert("Cliente inserido com sucesso!");
                props.setExibirCliente(true);
            } else { // aqui acontece a atualizacao
                props.setListaCliente(props.listaCliente.map((item) => 
                    item.codigo === props.clienteSelecionado.codigo ? props.clienteSelecionado : item
                ));
                window.alert("Cliente atualizado com sucesso!");
                props.setClienteSelecionado(clienteReseta);
                props.setModoEdicao(false);
                props.setExibirCliente(true);
            }
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;

        props.setClienteSelecionado({ ...props.clienteSelecionado, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Código</Form.Label>
                        <Form.Control disabled={props.modoEdicao} required type="number" id="codigo" name="codigo" value={props.clienteSelecionado.codigo} onChange={manipularMudanca} placeholder="Código" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o código do cliente!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control required type="text" id="nome" name="nome" value={props.clienteSelecionado.nome} onChange={manipularMudanca} placeholder="Nome:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o nome do cliente!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>CPF: </Form.Label>
                        <Form.Control required type="text" id="cpf" name="cpf" value={props.clienteSelecionado.cpf} onChange={manipularMudanca} placeholder="CPF:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o cpf!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control required type="email" id="email" name="email" value={props.clienteSelecionado.email} onChange={manipularMudanca} placeholder="Email:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o email!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Url da imagem de perfil:</Form.Label>
                        <Form.Control required type="url" id="urlImagem" name="urlImagem" value={props.clienteSelecionado.urlImagem} onChange={manipularMudanca} placeholder="Url da imagem:" />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a imagem de perfil!
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
                            props.setExibirCliente(true);
                        }}
                        type="button"
                        variant="success"
                    >
                        Voltar
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

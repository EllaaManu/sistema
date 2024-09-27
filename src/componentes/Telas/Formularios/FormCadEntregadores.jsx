import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function FormCadEntregadores(props) {
    const [formValidado, setFormValidado] = useState(false);
    const entregadorReseta = {
        codigo: 0,
        nome: "",
        cpf: "",
        email: "",
        veiculo: "",
    };

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaEntregador([...props.listaEntregador, props.entregadorSelecionado]);
                window.alert("Entregador inserido com sucesso!");
                props.setExibirEntregador(true);
            } else {
                props.setListaEntregador(
                    props.listaEntregador.map((item) =>
                        item.codigo === props.entregadorSelecionado.codigo ? props.entregadorSelecionado : item
                    )
                );
                window.alert("Entregador atualizado com sucesso!");
                props.setEntregadorSelecionado(entregadorReseta);
                props.setModoEdicao(false);
                props.setExibirEntregador(true);
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
        props.setEntregadorSelecionado({ ...props.entregadorSelecionado, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao} id="formularioEntregadores">
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Código</Form.Label>
                        <Form.Control disabled={props.modoEdicao} required type="number" id="codigo" name="codigo" value={props.entregadorSelecionado.codigo} onChange={manipularMudanca} placeholder="Código" />
                        <Form.Control.Feedback type="invalid">Por favor, informe o código do entregador!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control required type="text" id="nome" name="nome" value={props.entregadorSelecionado.nome} onChange={manipularMudanca} placeholder="Nome" />
                        <Form.Control.Feedback type="invalid">Por favor, informe o nome do entregador!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>CPF: </Form.Label>
                        <Form.Control required type="text" id="cpf" name="cpf" value={props.entregadorSelecionado.cpf} onChange={manipularMudanca} placeholder="CPF" />
                        <Form.Control.Feedback type="invalid">Por favor, informe o CPF!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control required type="email" id="email" name="email" value={props.entregadorSelecionado.email} onChange={manipularMudanca} placeholder="Email" />
                        <Form.Control.Feedback type="invalid">Por favor, informe o email!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Veículo:</Form.Label>
                        <Form.Control required type="text" id="veiculo" name="veiculo" value={props.entregadorSelecionado.veiculo} onChange={manipularMudanca} placeholder="Veículo" />
                        <Form.Control.Feedback type="invalid">Por favor, informe o veículo do entregador!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-2 mb-2">
                <Col md={1}>
                    <Button id="botao" type="submit" variant="success">
                        Confirmar
                    </Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => { props.setExibirEntregador(true); props.setEntregadorSelecionado(entregadorReseta); }} type="button" variant="success">
                        Voltar
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

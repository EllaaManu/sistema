import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function FormCadUsuarios(props) {
    const [formValidado, setFormValidado] = useState(false);
    const usuarioReseta = {
        codigo: 0,
        nome: "",
        email: "",
        perfil: "Usuário", // Definindo "Usuário" como valor padrão
    };

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaUsuario([...props.listaUsuario, props.usuarioSelecionado]);

                window.alert("Usuário inserido com sucesso!");
                props.setExibirUsuario(true);
            } else {
                props.setListaUsuario(
                    props.listaUsuario.map((item) =>
                        item.codigo === props.usuarioSelecionado.codigo ? props.usuarioSelecionado : item
                    )
                );
                window.alert("Usuário atualizado com sucesso!");
                props.setUsuarioSelecionado(usuarioReseta);
                props.setModoEdicao(false);
                props.setExibirUsuario(true);
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

        props.setUsuarioSelecionado({ ...props.usuarioSelecionado, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Código</Form.Label>
                        <Form.Control
                            disabled={props.modoEdicao}
                            required
                            type="number"
                            id="codigo"
                            name="codigo"
                            value={props.usuarioSelecionado.codigo}
                            onChange={manipularMudanca}
                            placeholder="Código"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o código do usuário!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="nome"
                            name="nome"
                            value={props.usuarioSelecionado.nome}
                            onChange={manipularMudanca}
                            placeholder="Nome"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o nome do usuário!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={props.usuarioSelecionado.email}
                            onChange={manipularMudanca}
                            placeholder="Email"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o email!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Perfil</Form.Label>
                        <Form.Select
                            required
                            id="perfil"
                            name="perfil"
                            value={props.usuarioSelecionado.perfil}
                            onChange={manipularMudanca}
                        >
                            <option value="Usuário">Usuário</option>
                            <option value="Admin">Admin</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Por favor, selecione o perfil!
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
                            props.setExibirUsuario(true);
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

import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    function atualizarCliente(cliente) {
        if (window.confirm(
            "Deseja realmente alterar o cliente -> " + cliente.codigo
        )) {
            props.setClienteSelecionado(cliente);
            props.setModoEdicao(true);
            props.setExibirCliente(false);
        }
    }

    function excluirCliente(cliente) {
        if (window.confirm(
            "Deseja realmente excluir o cliente -> " + cliente.codigo
        )) {
            props.setListaCliente(
                props.listaCliente.filter((item) => {
                    return item.codigo !== cliente.codigo;
                })
            );
            window.alert("Cliente deletado com sucesso!");
        }
    }

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Email</th>
                            <th>Imagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaCliente?.map((cliente) => {
                            return (
                                <tr key={cliente.codigo}>
                                    <td>{cliente.codigo}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.email}</td>
                                    <td><img src={cliente.urlImagem} /></td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                atualizarCliente(cliente);
                                            }}
                                            variant="warning"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pencil-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                />
                                            </svg>
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                excluirCliente(cliente);
                                            }}
                                            variant="danger"
                                            className="ml-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-trash"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <h4>Número de clientes: {props.listaCliente?.length}</h4>
                <Button className="mb-3 d-flex justify-content-center mx-auto" variant="success"
                    onClick={() => {
                        props.setExibirCliente(false);
                    }}>
                    Adicionar
                </Button>
            </Container>
        </>
    )
}
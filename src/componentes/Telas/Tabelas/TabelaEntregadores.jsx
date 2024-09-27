// TabelaEntregadores.jsx
import { Button, Container, Table } from "react-bootstrap";

export default function TabelaEntregadores(props) {
    function atualizarEntregador(entregador) {
        if (window.confirm("Deseja realmente alterar o entregador -> " + entregador.codigo)) {
            props.setEntregadorSelecionado(entregador);
            props.setModoEdicao(true);
            props.setExibirEntregador(false);
        }
    }

    function excluirEntregador(entregador) {
        if (window.confirm("Deseja realmente excluir o entregador -> " + entregador.codigo)) {
            props.setListaEntregador(
                props.listaEntregador.filter((item) => item.codigo !== entregador.codigo)
            );
            window.alert("Entregador deletado com sucesso!");
        }
    }

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Veículo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaEntregador?.map((entregador) => (
                        <tr key={entregador.codigo}>
                            <td>{entregador.codigo}</td>
                            <td>{entregador.nome}</td>
                            <td>{entregador.cpf}</td>
                            <td>{entregador.email}</td>
                            <td>{entregador.veiculo}</td>
                            <td>
                                <Button onClick={() => atualizarEntregador(entregador)} variant="warning">Editar</Button>
                                <Button onClick={() => excluirEntregador(entregador)} variant="danger" className="ml-2">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h4>Número de entregadores: {props.listaEntregador?.length}</h4>
            <Button className="mb-3 d-flex justify-content-center mx-auto" variant="success" onClick={() => { if (props.formulario) { props.formulario.reset() }; props.setExibirEntregador(false)}}>
                Adicionar
            </Button>
        </Container>
    );
}

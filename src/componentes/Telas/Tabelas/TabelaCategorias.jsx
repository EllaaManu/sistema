import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {


  function atualizarCategoria(categoria) {
    if (
      window.confirm(
        "Deseja realmente alterar a categoria -> " + categoria.descricao
      )
    ) {
      props.setCategoriaSelecionada(categoria);
      props.setModoEdicao(true);
      props.setExibirCategoria(false);
    }
  }

  function excluirCategoria(categoria) {
    if (
      window.confirm(
        "Deseja realmente excluir a categoria " + categoria.descricao
      )
    ) {
      props.setListaCategoria(
        props.listaCategoria.filter((item) => {
          return item.codigo !== categoria.codigo;
        })
      );
      window.alert("Categoria deletada com sucesso!");
    }
  }

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Data de criação</th>
              <th>Última atualização</th>
              <th>Total de Produtos</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.listaCategoria?.map((categoria) => {
              return (
                <tr key={categoria.codigo}>
                  <td>{categoria.codigo}</td>
                  <td>{categoria.descricao}</td>
                  <td>{new Date(categoria.dataCriacao).toLocaleDateString()}</td>
                  <td>{new Date(categoria.ultimaAtualizacao).toLocaleDateString()}</td>
                  <td>{categoria.status}</td>
                  <td>
                    <Button
                      onClick={() => {
                        atualizarCategoria(categoria);
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
                        excluirCategoria(categoria);
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
              );
            })}
          </tbody>
        </Table>
        <h4>Número de categorias: {props.listaCategoria?.length}</h4>
        <Button className="mb-3 d-flex justify-content-center mx-auto" variant="success"
          onClick={() => {
            props.setExibirCategoria(false);
          }}>
          Adicionar
        </Button>
      </Container>
    </>
  );
}

import FormCadClientes from "./Formularios/FormCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { clientes } from "../../dados/mockClientes";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";

export default function TelaCadastroCliente(props) {
    const [exibirCliente, setExibirCliente] = useState(true);
    const [listaCliente, setListaCliente] = useState(clientes);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        email: "",
        urlImagem: ""
    })

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                {
                    exibirCliente ?
                        <TabelaClientes
                            listaCliente={listaCliente}
                            setListaCliente={setListaCliente}
                            setExibirCliente={setExibirCliente}
                            setModoEdicao={setModoEdicao}
                            setClienteSelecionado={setClienteSelecionado}
                        /> :
                        <FormCadClientes
                            listaCliente={listaCliente}
                            setListaCliente={setListaCliente}
                            setExibirCliente={setExibirCliente}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            clienteSelecionado={clienteSelecionado}
                            setClienteSelecionado={setClienteSelecionado}
                        />
                }
            </Pagina>
        </div>
    );
}
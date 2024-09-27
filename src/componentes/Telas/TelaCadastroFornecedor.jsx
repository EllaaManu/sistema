import { Alert } from "react-bootstrap";
import { fornecedores } from "../../dados/mockFornecedores";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { useState } from "react";
import Pagina from "../layouts/Pagina";

export default function TelaCadastroFornecedor(props) {

    const [exibirFornecedor, setExibirFornecedor] = useState(true);
    const [listaFornecedor, setListaFornecedor] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        contato: "",
        localizacao: ""
    });
    
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                {exibirFornecedor ?
                    <TabelaFornecedores
                        listaFornecedor={listaFornecedor}
                        setListaFornecedor={setListaFornecedor}
                        setExibirFornecedor={setExibirFornecedor}
                        setModoEdicao={setModoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        /> :
                        <FormCadFornecedor
                        setListaFornecedor={setListaFornecedor}
                        listaFornecedor={listaFornecedor}
                        setExibirFornecedor={setExibirFornecedor}
                        setModoEdicao={setModoEdicao}
                        modoEdicao={modoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        fornecedorSelecionado={fornecedorSelecionado}
                    />}
            </Pagina>
        </div>
    );

}

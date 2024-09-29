import FormCadEntregadores from "./Formularios/FormCadEntregadores";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import { entregadores } from "../../dados/mockEntregadores";

export default function TelaCadastroEntregador(props) {
    const [exibirEntregador, setExibirEntregador] = useState(true);
    const [listaEntregador, setListaEntregador] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        email: "",
        veiculo: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>Cadastro de Entregadores</h2>
                </Alert>
                {
                    exibirEntregador ?
                        <TabelaEntregadores
                            listaEntregador={listaEntregador}
                            setListaEntregador={setListaEntregador}
                            setExibirEntregador={setExibirEntregador}
                            setModoEdicao={setModoEdicao}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                        /> :
                        <FormCadEntregadores
                            listaEntregador={listaEntregador}
                            setListaEntregador={setListaEntregador}
                            setExibirEntregador={setExibirEntregador}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            entregadorSelecionado={entregadorSelecionado}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                        />
                }
            </Pagina>
        </div>
    );
}

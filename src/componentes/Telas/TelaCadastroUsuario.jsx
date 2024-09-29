import FormCadUsuarios from "./Formularios/FormCadUsuario";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { usuarios } from "../../dados/mockUsuarios";
import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";

export default function TelaCadastroUsuario(props) {
    const [exibirUsuario, setExibirUsuario] = useState(true);
    const [listaUsuario, setListaUsuario] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        perfil: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>
                        Cadastro de Usuários
                    </h2>
                </Alert>
                {exibirUsuario ? (
                    <TabelaUsuarios
                        listaUsuario={listaUsuario}
                        setListaUsuario={setListaUsuario}
                        setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setExibirUsuario={setExibirUsuario}
                    />
                ) : (
                    <FormCadUsuarios
                        usuarioSelecionado={usuarioSelecionado}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        listaUsuario={listaUsuario}
                        setListaUsuario={setListaUsuario}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        setExibirUsuario={setExibirUsuario}
                    />
                )}
            </Pagina>
        </div>
    );
}

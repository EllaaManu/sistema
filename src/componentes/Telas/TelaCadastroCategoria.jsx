import { Alert } from "react-bootstrap";
import FormCadCategorias from "./Formularios/FormCadCategoria";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCategorias from "./Tabelas/TabelaCategorias";
import { categorias } from "../../dados/mockCategorias";
export default function TelaCadastroCategoria(props) {

    const [exibirCategoria, setExibirCategoria] = useState(true);
    const [listaCategoria, setListaCategoria] = useState(categorias);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo:0,
        descricao:"",
        datacriacao:"",
        ultimaatualizacao:"",
        totalprodutos:0,
        status:""
    });


    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>
                        Cadastro de Categoria
                    </h2>
                </Alert>
                {
                    exibirCategoria ?
                        <TabelaCategorias 
                        listaCategoria={listaCategoria} 
                        setListaCategoria={setListaCategoria}
                        setExibirCategoria={setExibirCategoria} 
                        setModoEdicao={setModoEdicao} 
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        /> :

                        <FormCadCategorias 
                        listaCategoria={listaCategoria} 
                        setListaCategoria={setListaCategoria}
                        setExibirCategoria={setExibirCategoria} 
                        setModoEdicao={setModoEdicao} 
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        modoEdicao={modoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        />
                }
            </Pagina>
        </div>
    );
}
import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    {/* <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Mais visitas</a>
                    </li>
                    <li>
                        <a href="#">Mais curtidas</a>
                    </li> */}

                    <ItemNavegacao  
                        iconeAtivo="./icones/home-ativo.png" 
                        iconeInativo="./icones/home-inativo.png"
                    >
                        Início
                    </ItemNavegacao>

                    <ItemNavegacao  
                        iconeAtivo="./icones/mais-vistas-ativo.png" 
                        iconeInativo="./icones/mais-vistas-inativo.png"
                        ativo={true}
                    >
                        Mais vistas
                    </ItemNavegacao>

                    <ItemNavegacao  
                        iconeAtivo="./icones/mais-curtidas-ativo.png" 
                        iconeInativo="./icones/mais-curtidas-inativo.png"
                        ativo={true}
                    >
                        Mais curtidas
                    </ItemNavegacao>

                    <ItemNavegacao  
                        iconeAtivo="./icones/novas-ativo.png" 
                        iconeInativo="./icones/novas-inativo.png"
                        ativo={true}
                    >
                        Novas
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;
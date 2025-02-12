import styled from "styled-components";

const ItemListaEstilizado = styled.li`
   font-size: 24px;
   line-height: 29px;
   margin-bottom: 30px;
   cursor: pointer;
   color: ${ props => props.$ativo ? '#D9D9D9' : '#7B78E5' };
   font-family: ${ props => props.$ativo ? 'GandhiSansRegular' : 'GandhiSansBold' };
   display: flex;
   align-items: center;
   gap: 22px;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo } alt="" />

        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao;
import styled from "styled-components";

const FooterEstilizado = styled.footer`
    height: 80px;
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ContainerSociaisEstilizado = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding-left: 30px;
`

const ParagrafoEstilizado = styled.p`
    color: #FFF;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 500;
`

const Footer = () => {
    return (
        <>
            <FooterEstilizado>
                <ContainerSociaisEstilizado>
                    <a href="#">
                        <img src="./imagens/sociais/facebook.svg" />
                    </a>
                    <a href="#">
                        <img src="./imagens/sociais/twitter.svg" />
                    </a>
                    <a href="#">
                        <img src="./imagens/sociais/instagram.svg" />
                    </a>
                </ContainerSociaisEstilizado>
                <ParagrafoEstilizado>Desenvolvido por Mylena.</ParagrafoEstilizado>
            </FooterEstilizado>
        </>
    )
}

export default Footer;
import styled from "styled-components";

const FooterEstilizado = styled.footer`
    height: 80px;
    width: 100%;
    margin-top: 100px;
    padding: 22px;
    box-sizing: border-box;
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const IconesEstilizados = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding-left: 30px;
`

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const TextoFooter = styled.p`
    color: #FFF;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`

const Footer = () => {
    return (
        <>
            <FooterEstilizado>
                <IconesEstilizados>
                    <IconeContainer>
                        <li>
                            <a href="#">
                                <img src="./imagens/sociais/facebook.svg" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./imagens/sociais/twitter.svg" />
                            </a>
                        </li>
                       <li>
                        <a href="https://www.instagram.com/galaxies/">
                                <img src="./imagens/sociais/instagram.svg" />
                            </a>
                       </li>
                    </IconeContainer>
                </IconesEstilizados>
                <TextoFooter>Desenvolvido por Mylena.</TextoFooter>
            </FooterEstilizado>
        </>
    )
}

export default Footer;
import { FooterButton, StyledFooterDiv } from "./StyledFooterDiv"
import LogoFooter from '../../assets/logoFooter.png'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useState } from "react";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <StyledFooterDiv>
            <img src={LogoFooter} alt="logo motors shop" />
            <span>2022 - Todos os direitos reservados</span>
            <FooterButton onClick={() => {
                scrollTop()
            }}>
                <MdKeyboardArrowUp size={25} />
            </FooterButton>
        </StyledFooterDiv>
    )
}

export default Footer

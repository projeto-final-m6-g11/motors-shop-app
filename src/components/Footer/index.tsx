import { FooterButton, StyledFooterDiv } from "./StyledFooterDiv"
import LogoFooter from '../../assets/logoFooter.png'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <StyledFooterDiv>
            <img src={LogoFooter} alt="logo motors shop" />
            <div>
                <AiOutlineCopyrightCircle className="copy" /><span> 2022 - Todos os direitos reservados</span>
            </div>
            <FooterButton onClick={() => {
                scrollTop()
            }}>
                <MdKeyboardArrowUp size={25} />
            </FooterButton>
        </StyledFooterDiv>
    )
}

export default Footer

import styled from 'styled-components';

export const StyledFooterDiv = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 10vh;

    padding: 50px;

    background-color: var(--grey0);
    color: #FFF;

    img {
        width: 150px;
        height: 26px;
    }

    span {
        font-family: 'Lexend', sans-serif;
        font-weight: 200;
        font-size: 14px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    @media (max-width: 395px) {
        height: 45vh;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        height: 45vh;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const FooterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: #FFF;
    transition: 0.6s;

    :hover {
        background-color: var(--grey0);
        transition: 0.6s;
    }
`

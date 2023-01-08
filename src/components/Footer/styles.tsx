import styled from "styled-components";

export const StyledFooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-height: 15vh;
  height: auto;
  padding: 50px;
  background-color: var(--grey0);
  color: var(--whiteFixed);


  img {
    width: 150px;
    height: 26px;
  }

  span {
    font-family: "Lexend", sans-serif;
    font-weight: 200;
    font-size: 14px;
  }

  div {
    gap: 5px;
  }

  img {
      width: 150px;
      height: 26px;
  }

  span {
      font-family: 'Lexend', sans-serif;
      font-weight: 200;
      font-size: 14px;
  }

  @media (max-width: 810px) {
    height: 20vh;
    flex-direction: column;
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
}`

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 4px;
  background-color: var(--grey1);
  color: var(--whiteFixed);
  transition: 0.6s;

  :hover {
    background-color: var(--grey2);
    transition: 0.6s;
  }
`;

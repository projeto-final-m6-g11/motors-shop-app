import styled from "styled-components";

export const StyledFooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 3rem;
  background-color: var(--grey0);
  color: var(--whiteFixed);
  bottom: 0;
  left: 0;

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
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 810px) {
    height: 20vh;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
  }
`;

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

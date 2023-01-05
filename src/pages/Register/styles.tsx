import styled, { css }from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--grey8);

  .pageContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rowDiv {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 5px;
  }

  .columnDiv {
    display: flex;
    flex-direction: column;
  }

`;

export default Main;


export const StyledRegisterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--whiteFixed);
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 4px;
`

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 48px;
    width: 375px;
    height: fit-content;
`

export const CreateAccountButton = styled.button`
    display: flex;
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background          : var(--brand1);
    color               : var(--whiteFixed);
`

export const BuyerBtn = styled.input`
  width: 49%;
  height: 45px;
  color: var(--whiteFixed);
  background-color: var(--brand1);
  border-radius: 4px;
  border: 1.5px solid var(--brand1);

  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.color === "color" &&
    css`
      background: var(--whiteFixed);
      color: #000;
      border: 1.5px solid var(--grey4);
    `}
`;

import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--whiteFixed);
  border-radius: 4px;
  width: 25.75rem;
  padding: 2.75rem 3rem;
  gap: 0.625rem;
  position: relative;
  margin: 3.125rem 0rem;
  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-bottom: 0.625rem;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: var(--grey1);
  }
  input {
    border: 1.5px solid var(--grey4);
    border-radius: 4px;
    width: 100%;
    height: 2.5rem;
    padding-left: 0.9375rem;
    /* color: var(--grey3); */
  }
  button {
    margin: 1rem 0rem;
    width: 100%;
    border: 0;
    border-radius: 0.3125rem;
    font-weight: 600;
    font-family: Inter;
    font-size: 1rem;
    height: 3rem;
    border: 0.0938rem solid var(--grey4);
  }
  .forget__password {
    /* margin-top: 5px; */
    display: flex;
    justify-content: end;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--grey2);
  }
  .create__account {
    display: flex;
    justify-content: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
  .enter__login {
    background-color: var(--brand1);
    color: var(--whiteFixed);
  }

  .goToRegister {
    background-color: var(--whiteFixed);
  }

  .forget__password {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--grey8);
`;



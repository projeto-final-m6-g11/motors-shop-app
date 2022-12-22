import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
  background-color: var(--whiteFixed);
  top: 68px;
  width: 100%;
  max-width: 400px;
  right: 3px;
  border-radius: 5px;
  box-shadow: 1px 10px 26px -3px var(--grey0);
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    div {
      width: 100%;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    button {
      color: var(--grey2);
      width: 90%;
      text-align: left;
      margin: 5px auto;
      border: none;
      font-size: large;
      background-color: var(--whiteFixed);
    }
    .divisionNavModal {
      border-top: 2px solid var(--grey4);
      height: 13rem;

      p {
        color: var(--grey2);
        font-size: 18px;
        width: 90%;
        text-align: left;
        margin: 5px auto;
      }

      button {
        color: var(--grey2);
        width: 90%;
        text-align: left;
        margin: 5px auto;
        border: none;
        font-size: large;
        background-color: var(--whiteFixed);
      }

      .button2 {
        text-align: center;
        color: var(--grey0);
        border: solid 2px var(--grey4);
        border-radius: 5px;
        padding: 8px;
        font-weight: 600;
        background-color: transparent;
      }
    }
  }
`;

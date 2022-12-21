import styled from "styled-components";

export const Box = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 3rem 0 3rem;
  height: 60px;
  background-color: var(--grey6);

  section {
    display: flex;
    justify-content: center;
  }
  div {
    cursor: pointer;
  }
  p {
    color: var(--grey2);
    font-size: 16px;
    width: 90%;
    margin: 5px auto;
    cursor: pointer;
  }

  @media (min-width: 810px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      height: 100%;

      .vehicles {
        border-right: 2px solid var(--grey4);
        height: 100%;
        display: flex;
        gap: 1rem;
        padding-right: 1rem;
        cursor: pointer;

        button {
          color: var(--grey2);
          border: none;
          background-color: transparent;
        }
      }
      .options {
        display: flex;
        align-items: center;
        gap: 1rem;

        .options-button1 {
          color: var(--brand1);
          font-weight: 600;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }

        .options-button2 {
          color: var(--grey0);
          border: solid 2px var(--grey4);
          border-radius: 5px;
          padding: 8px;
          font-weight: 600;
          background-color: transparent;
          cursor: pointer;
        }
      }
      .profile {
        margin-left: 0.7rem;
        border-radius: 100%;
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--whiteFixed);
        background-color: var(--brand2);
      }
    }
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;

  @media screen and (min-width: 810px) {
    display: none;
  }
`;

export const MenuModal = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;

  @media screen and (max-width: 810px) {
    display: none;
  }
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--whiteFixed);
  top: 68px;
  width: 100%;
  max-width: 200px;
  right: 5px;
  border-radius: 5px;
  box-shadow: 1px 10px 26px -3px var(--grey0);

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    .divisionNavModal {
      border-top: 2px solid var(--grey4);
      height: 8rem;

      button {
        color: var(--grey2);
        width: 90%;
        text-align: left;
        margin: 5px auto;
        border: none;
        font-size: large;
        background-color: var(--whiteFixed);
      }
    }
  }
`;
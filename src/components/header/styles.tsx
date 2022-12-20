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

  @media (min-width: 810px) {
    .container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .vehicles {
        display: flex;
        gap: 1rem;
        cursor: pointer;

        button {
          color: var(--grey2);
          border: none;
          background-color: transparent;
        }
      }
      .division {
        color: var(--grey2);
      }
      .options {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        .options-button1 {
          color: var(--brand1);
          font-weight: 600;
          border: none;
          background-color: transparent;
        }

        .options-button2 {
          color: var(--grey0);
          border: solid 2px var(--grey4);
          border-radius: 5px;
          padding: 8px;
          font-weight: 600;
          background-color: transparent;
        }
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

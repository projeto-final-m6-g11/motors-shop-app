import styled from "styled-components";

export const Box = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .usuario {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0.3rem;
    gap: 0.5rem;

    .iniciais {
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--whiteFixed);
      background-color: var(--brand2);
      height: 1.5rem;
      width: 1.5rem;
      font-size: 10px;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: var(--grey1);
    }
    span {
      font-size: 10px;
      color: var(--grey3);
    }
  }

  .usuario_comentario {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;

    form {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      input {
        font-size: 12px;
        height: 20px;
        width: 90%;
        height: 40px;
        background-color: transparent;
        border: 1px solid var(--grey5);
        border-radius: 5px;
        padding-left: 0.5rem;
      }
      input:disabled {
        border: none;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        border-radius: 8px;
        border: none;
        background-color: transparent;

        :hover {
          background-color: var(--grey6);
        }

        @media (min-width: 810px) {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
`;

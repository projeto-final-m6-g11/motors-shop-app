import styled from "styled-components";

export const Box = styled.li`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
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

  .comentario {
    font-size: 12px;
    color: var(--grey2);
  }
`;

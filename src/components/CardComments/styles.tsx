import styled from "styled-components";

export const Box = styled.li`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-weight: 500;
      font-size: 14px;
      color: var(--whiteFixed);
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: var(--grey1);
    }
    span {
      font-size: 10px;
      color: var(--grey3);
    }
  }

  p {
    font-size: 12px;
    color: var(--grey2);
  }
`;

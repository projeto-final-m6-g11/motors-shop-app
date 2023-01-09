import styled from "styled-components";

export const FormPattern = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  border-radius: 4px;
  padding: 30px;
  max-height: 80vh;
  overflow-y: auto;
  background-color: var(--whiteFixed);

  .divRow {
    display: flex;
    flex-direction: row;
  }

  .divColumn {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
  }

  .divRowEnd {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    margin-top: 2rem;

    @media (max-width: 395px) {
      align-self: center;
    }

  }

  height: fit-content;

  @media (min-width: 810px) {
    max-width: 520px;
  }
`;

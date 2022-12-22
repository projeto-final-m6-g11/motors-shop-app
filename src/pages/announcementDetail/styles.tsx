import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--grey8);
  width: 100vw;

  section section:first-child {
    position: relative;
  }

  section section:last-child {
    position: relative;
    margin-top: -260px;
  }
`;

import styled from "styled-components";

export const Ulstyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 2rem;
  width: 90vw;
  gap: 1.25rem;
`;

export const Vitrine = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    line-height: 100%;
    margin-bottom: 2.5rem;
  }
`;
export const Carrousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  button {
    background: none;
    border: 0;
  }
  svg {
    font-size: 1.5rem;
  }
`;

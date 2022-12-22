import styled from "styled-components";

export const Ulstyled = styled.ul`
  display: flex;
  width: 90%;
  gap: 1.25rem;
  overflow-y: hidden;
  overflow-x: hidden;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

export const Vitrine = styled.div`
  width: 100%;
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

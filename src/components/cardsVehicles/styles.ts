import styled from "styled-components";

export const CardStyled = styled.li`
  width: 12.5rem;
  height: 15.625rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  figure {
    width: 100%;
    height: 50%;
    background-color: var(--grey7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.625rem;
  }
  figure img {
    height: 100%;
    background: none;
  }
  article h1 {
    font-size: 1rem;
    line-height: 1.25rem;
    line-height: 100%;
    margin-bottom: 0.3125rem;
  }
  article p {
    font-family: "Inter";
    font-size: 0.875rem;
    line-height: 1.5rem;
    line-height: 142%;
  }
  article div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  article div p {
    font-family: "Inter";
    color: var(--grey1);
    font-size: 1rem;
    line-height: 1.25rem;
    line-height: 100%;
    font-weight: 600;
  }
  .km__year__car span {
    background-color: var(--brand4);
    color: var(--brand1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3125rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
    line-height: 142%;
    font-weight: 500;
  }
  .km__year__car {
    display: flex;
    gap: 0.625rem;
  }
  .flutuante__active {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    left: 0.75rem;
    top: 0.75rem;
    padding: 0.1875rem 0.375rem;
    font-size: 0.875rem;
    /* inset: 10, 10, 10, 10; */
  }
  .flutuante__inactive {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey4);
    color: var(--whiteFixed);
    left: 0.75rem;
    top: 0.75rem;
    padding: 0.1875rem 0.375rem;
    font-size: 0.875rem;
    /* inset: 10, 10, 10, 10; */
  }
`;

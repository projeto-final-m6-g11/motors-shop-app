import styled from "styled-components";

export const CardStyled = styled.li`
  min-width: 325px;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.625rem;

  :hover {
    cursor: pointer;
  }
  figure {
    width: 100%;
    height: 50%;
    background-color: var(--grey7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.625rem;
    border: 1px solid transparent;

    :hover {
      border: 1px solid var(--brand2);
    }
  }
  figure img {
    height: 100%;
    max-width: 100%;
    background: none;
    object-fit: cover;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 7px;
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
    border-radius: 0.3125rem;
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
    left: 0.625rem;
    top: 0.625rem;
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
    left: 0.625rem;
    top: 0.625rem;
    padding: 0.1875rem 0.375rem;
    font-size: 0.875rem;
    /* inset: 10, 10, 10, 10; */
  }
  .user__data {
    display: flex;
    align-items: baseline;
  }
  .user__data figure {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteFixed);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    background-color: var(--brand1);
    margin-bottom: 0px;
  }
  .user__data p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-left: 10px;
  }
`;
export const InputButton = styled.button`
  padding: 0px 20px;
  height: 45px;
  color: var(--grey0);
  background-color: var(--whiteFixed);
  border-radius: 4px;
  border: 1.5px solid var(--grey0);

`;
export const DivButtons = styled.div`
  width: 100%;
  height: 45px;
  color: var(--grey0);
  display: flex;
  gap: 15px;

`;
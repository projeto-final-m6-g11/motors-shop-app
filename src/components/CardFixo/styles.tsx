import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items:     center;
  flex-direction: column;
  gap: 3rem;
  width: 100vw;
  height: 400px;
  padding: 0 2rem 0 2rem;
  background-color: var(--brand2);
  
  h1 {
    font-weight: 700;
    color: var(--grey10);
    margin-bottom: 2rem;

    @media (max-width: 375px) {
      font-size: 20px;
    }

    @media (min-width: 375px) {
      font-size: 25px;
    }

    @media (min-width: 810px) {
      font-size: 35px;
    }
  }

  p {
    color: var(--grey9);

    @media (max-width: 375px) {
      font-size: 15px;
    }

    @media (min-width: 375px) {
      font-size: 20px;
    }
  }

  @media (min-width: 375px) {
    height: 350px;
  }

  @media (min-width: 810px) {
    height: 300px;
  }
`;

export const Title = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 810px) {
    margin: 0 10rem;
  }

  @media (min-width: 1100px) {
    margin: 0 15rem;
  }
`;

export const ContainerButtons = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  gap: 1rem;


  button {
    color: var(--grey10);
    border: solid 1px var(--grey10);
    border-radius: 5px;
    padding: 8px;
    font-weight: 600;
    background-color: transparent;

    @media (max-width: 810px) {
      width: 100%;
    }
    @media (min-width: 810px) {
      width: 10rem;
    }
  }

  @media (max-width: 810px) {
    width: 100%;
  }
  @media (min-width: 810px) {
    flex-direction: row;
    gap: 2rem;

  }
  a {
    background-color: transparent;

    @media (max-width: 810px) {
      width: 100%;
    }
    @media (min-width: 810px) {
      width: 10rem;
    }
  }

  @media (max-width: 810px) {
    width: 100%;
  }
  @media (min-width: 810px) {
    flex-direction: row;
    gap: 2rem;

  }
`;

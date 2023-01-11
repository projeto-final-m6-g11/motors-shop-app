import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 810px) {
    align-items: flex-start;
  }
`;

export const BoxAnuncio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 810px) {
    width: 95%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 0 2rem;
  }

  div {
    margin: 0 1rem;

    @media (min-width: 810px) {
      margin: 0;
    }
  }
`;

export const BoxCarro = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;
  width: 90vw;
  height: 80vw;

  div {
    display: flex;
    justify-content: center;
    width: 90%;
    height: 90%;
    background-color: var(--grey10);

    img {
      width: 90%;
      height: 90%;
    }
  }

  @media (min-width: 810px) {
    width: 50vw;
    height: 35vw;
  }
`;

export const BoxInfo = styled.article`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;
  width: 90vw;
  padding: 2rem;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--grey1);
    text-align: left;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
    margin-left: 0;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;

      p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 2em;
        background-color: var(--brand4);
        border-radius: 4px;
        color: var(--brand1);
        padding: 0.25rem 0.5rem;
        margin-right: 0.75rem;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5rem;
        white-space: nowrap;
      }
    }

    span {
      margin: 1rem 0;
      color: var(--grey1);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25rem;
    }

    @media (min-width: 810px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      div {
        justify-content: flex-start;

        p {
          font-size: 18px;
        }
      }

      span {
        width: 150px;
        font-size: 18px;
      }
    }
  }

  button {
    margin: 1rem 0;
    padding: 1rem;
    width: 6rem;
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border: none;
    border-radius: 4px;
    font-weight: 600;

    :hover {
      color: var(--brand1);
      background-color: var(--brand4);
    }

    @media (min-width: 810px) {
      width: 8rem;
    }
  }

  @media (min-width: 810px) {
    width: 50vw;
    height: 28vw;

    h1 {
      font-size: 22px;
    }
  }

  @media (min-width: 1200px) {
    height: 22vw;
  }
`;

export const BoxDescrição = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;
  width: 90vw;
  padding: 2rem;

  h3 {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    color: var(--grey1);
    padding-left: 0.5rem;
  }

  p {
    text-align: left;
    font-size: 16px;
    color: var(--grey2);
    padding: 1rem 0 0 0.5rem;
  }

  @media (min-width: 810px) {
    width: 50vw;
  }
`;

export const BoxFotos = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;

  h3 {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    color: var(--grey1);
    padding-left: 0.5rem;
  }
`;

export const BoxImgUl = styled.ul`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0.5rem;

  li {
    width: 30%;
    margin: 0 0 0.5em 0.3em;
    background-color: var(--grey7);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;

    img {
      max-width: 100%;
      cursor: pointer;
    }
  }
`;

export const BoxPerfil = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;

  div {
    border-radius: 100%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteFixed);
    background-color: var(--brand1);

    p {
      font-size: 16px;
      font-weight: 600;
      color: var(--whiteFixed);
      margin: 0;

      @media (min-width: 810px) {
        font-size: 24px;
      }
    }

    @media (min-width: 810px) {
      height: 6rem;
      width: 6rem;
      font-size: 18px;
    }
  }

  h3 {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 18px;
    color: var(--grey1);

    @media (min-width: 810px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 16px;
    color: var(--grey2);

    @media (min-width: 810px) {
      font-size: 18px;
    }
  }

  button {
    margin-top: 1rem;
    padding: 1rem;
    width: 15rem;
    color: var(--whiteFixed);
    background-color: var(--grey0);
    border: 2px solid var(--grey0);
    border-radius: 4px;
    font-weight: 600;

    :hover {
      color: var(--grey0);
      background-color: var(--whiteFixed);
      border: 2px solid var(--grey0);
    }
  }

  @media (min-width: 810px) {
    height: 38vw;
  }

  @media (min-width: 1200px) {
    height: 28vw;
  }
`;

export const BoxComments = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--grey10);
  margin: 1rem;
  border-radius: 4px;
  width: 90vw;
  padding: 2rem;

  h2 {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    color: var(--grey1);
    margin-bottom: 1rem;
  }

  @media (min-width: 810px) {
    width: 50vw;
    margin-left: 3rem;

    h2 {
      font-size: 20px;
    }
  }
`;

export const ListComments = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 80vw;

  @media (min-width: 810px) {
    width: 45vw;
  }
`;

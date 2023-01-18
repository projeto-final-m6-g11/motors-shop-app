import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem;
  border-radius: 4px;
  width: 90vw;
  padding: 2rem;
  background-color: var(--grey10);

  @media (min-width: 810px) {
    width: 50vw;
    margin-left: 3rem;
  }
`;

interface props {
  color: string;
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;

  .User__data {
    display: flex;
    align-items: center;
  }

  .User__data figure {
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
    background-color: var(--${(p: props) => p.color});
  }

  .User__data p {
    margin-left: 10px;
  }
`;

export const ContainerTextArea = styled.div`
  display: flex;
  max-height: 400px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--grey7);
  border-radius: 5px;

  button {
    background-color: var(--brand1);
    border: 0px;
    color: var(--whiteFixed);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
    width: 108px;
    height: 38px;
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    margin: 0 8px 8px 0;
    transition: 0.4s;

    :hover {
      background-color: var(--whiteFixed);
      color: var(--brand1);
    }
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;
  padding: 10px;
  border: 0;
  width: 70%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  min-height: 100px;
  background-color: transparent;
  margin: 5px 0 0 5px;

  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`;

export const FastButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  background-color: var(--grey7);
  color: var(--grey3);
  border-radius: 24px;
  padding: 0px 12px;
  border: none;
`;

export const ContainerFastButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const ContainerButtonLogin = styled.div`
  display: flex;
  margin-left: 66px;
  button {
    padding: 0px 20px;
    height: 50px;
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border: none;
    border-radius: 4px;
    font-weight: 600;
  }
`;

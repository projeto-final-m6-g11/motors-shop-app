import styled from "styled-components";

interface props {
  color: string;
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  padding: 36px 44px;
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
  border: 1.5px solid var(--whiteFixed);
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 0px;
  }
  :focus {
    border: 1.5px solid var(--brand1);
  }
`;
export const ContainerTextArea = styled.div`
  display: flex;
  max-height: 400px;
  align-items: flex-end;
  gap: 10px;
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

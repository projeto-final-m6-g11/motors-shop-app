import styled, { css } from "styled-components";

export const CampButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
export const InputButton = styled.input`
  width: 49%;
  height: 45px;
  color: var(--whiteFixed);
  background-color: var(--brand1);
  border-radius: 4px;
  border: 1.5px solid var(--brand1);

  ${(props) =>
    props.color === "color" &&
    css`
      background: var(--whiteFixed);
      color: var(--brand1);
      border: 1.5px solid var(--grey4);
    `}
`;
export const TitleP = styled.p`
  margin: 24px 0px 0px 0px;
  font-weight: 500;
  font-size: 14px;
  font-family: "Inter";
`;



export const ButtonAddImg = styled.button`
  width: 290px;
  min-height: 40px;
  color: var(--brand1);
  background-color: var(--brand4);
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 0px;
  margin-top: 40px;
  border: solid 1.5px var(--brand4);
  border-radius: 4px;
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleForm = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 90% !important;
`;

export const ButtonClosed = styled.button`
  background-color: var(--whiteFixed);
  color: var(--grey4) !important;
  text-align: end !important;
  border: none;
  margin: 0 !important;
  width: 10% !important;
`;

export const LabelButtonForm = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 18px;
  margin-top: 20px;
`;
export const LabelForm = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-top: 20px;
  color: var(--grey1);
  font-weight: 500;
`;

export const InputPattern = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1.5px solid var(--grey5);
  padding: 10px;
  font-size: 16px;
  color: var(--grey3);
  margin-top: 5px;
`;

export const InputDescription = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1.5px solid var(--grey5);
  padding: 10px;
  font-size: 16px;
  color: var(--grey3);
  margin-top: 5px;
`;

export const FooterForm = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: right;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const ButtonFooter = styled.button`
  width: 170px;
  height: 45px;
  text-align: center !important;
  color: var(--whiteFixed) !important;
  background-color: var(--brand2) !important;
  border-radius: 4px;
  border: 1.5px solid var(--brand2) !important;
  transition: 0.4s !important;

  :hover {
    background-color: var(--whiteFixed) !important;
    color: var(--brand2) !important;
  }

  ${(props) =>
    props.color === "color" &&
    css`
      background: var(--grey6) !important;
      color: var(--grey2) !important;
      border: 1.5px solid var(--grey6) !important;
      width: 110px;

      :hover {
        background-color: var(--grey0) !important;
        border: 1.5px solid var(--grey0) !important;
        color: var(--whiteFixed) !important;
      }

    `}
`;

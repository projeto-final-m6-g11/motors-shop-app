import styled, { css } from "styled-components";

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
  height: 48px !important;
  border-radius: 4px;
  border: 1.5px solid var(--grey5);
  padding: 10px;
  font-size: 16px;
  color: var(--grey3);
  margin-top: 5px;
`;

export const InputDate = styled.input`
  display: flex;
  border-radius: 4px;
  border: 1.5px solid var(--grey5);
  padding: 10px;
  font-size: 14px;
  color: var(--grey3);
  text-align: center;
  height: 42px !important;
  margin-top: 5px;

`

export const InputDescription = styled.input`
  border-radius: 4px;
  height: 142px;
  border: 1.5px solid var(--grey5);
  padding: 10px;
  color: var(--grey3);
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const FooterForm = styled.div`
  display: flex;
  display: flex;
  justify-content: right;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const ButtonFooter = styled.button`
  width: 200px;
  height: 45px;
  text-align: center !important;
  color: var(--whiteFixed) !important;
  background-color: var(--brand2) !important;
  border-radius: 4px;
  border: 1.5px solid var(--brand2) !important;

  ${(props) =>
    props.color === "color" &&
    css`
      background: var(--grey6) !important;
      color: var(--grey2) !important;
      border: 1.5px solid var(--grey6) !important;
      width: 125px;
    `}
`;

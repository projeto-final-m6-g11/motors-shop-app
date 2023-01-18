import styled, { css } from "styled-components";

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh !important;
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

export const BoxAddress = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row !important;
  height: 40px !important;
  gap: 6px;

  label {
    width: 50%;
  }

  @media (min-width: 810px) {
    width: 100%;
  }
`;

export const BoxAddress2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row !important;
  height: 40px !important;
  gap: 6px;
`;

export const FooterForm = styled.div`
  margin-top: 55px;
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
      width: 125px;

      :hover {
        background-color: var(--grey0) !important;
        border: 1.5px solid var(--grey0) !important;
        color: var(--whiteFixed) !important;
      }
    `}
`;

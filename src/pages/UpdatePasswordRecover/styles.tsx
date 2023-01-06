import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
min-height: 100vh;
background-color: var(--grey8);

.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rowDiv {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 5px;
}

.columnDiv {
  display: flex;
  flex-direction: column;
}

`;

export const StyledSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 4px;
    flex-grow: 1;
`

export const StyledForm = styled.form`
    background-color: var(--whiteFixed);

    display: flex;
    flex-direction: column;
    padding: 48px;
    width: 375px;
    height: fit-content;
`

export const AccountButton = styled.button`
    display: flex;
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background          : var(--brand1);
    color               : var(--whiteFixed);
`

import styled from "styled-components";

export const ModalBackground = styled.div`
    width               : 100vw;
    height              : 100vh;
    background-color    : rgba(0, 0, 0, 0.5);
    position            : fixed;
    top                 : 0px;
    left                : 0px;
    z-index             : 1000;
    display             : flex;
`

export const ModalDivSuccess = styled.div`
    background-color: var(--whiteFixed);
    height: 290px;
    width: 375px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    padding: 20px !important;
    gap: 25px !important;
    border-radius: 4px;

    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;

    .divRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 35px;
        width: 100%;
    }

    span {
        color: #495057;
    }
    
    .subtitle {
        color: #212529;
    }

    .title {
        color: #212529;
    }

`
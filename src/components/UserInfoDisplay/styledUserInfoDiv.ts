import styled from "styled-components";

export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    padding: 50px;

    background-color: var(--grey10);

    width: 80vw;
    height: 400px;

    position: absolute;
    top: 155px;

    border-radius: 4px;

    img {
        border-radius: 50%;
        width: 104px;
        height: 104px;
    }

    @media (max-width: 395px) {
        top: 145px;
        padding: 20px;
    }
`

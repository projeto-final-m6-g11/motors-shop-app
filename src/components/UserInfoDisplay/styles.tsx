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

    margin-left: auto;
    margin-right: auto;

    border-radius: 4px;

    img {
        border-radius: 50%;
        width: 104px;
        height: 104px;
    }

    span {
        font-family: 'Lexend', sans-serif;
        color: #212529;
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        color: #495057;
        text-align: left;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .advertiser {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #4529E6;
        background-color: #EDEAFD;
        border-radius: 4px;
        padding: 4px 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 92px;
        height: 32px;
    }

    .iniciais {
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--whiteFixed);
      background-color: var(--brand2);
      height: 104px;
      width: 104px;
      font-size: 36px;
    }

    .createAnnouncementBtn {
        border: 1.5px solid #4529E6;
        border-radius: 4px;
        color: #4529E6;
        background-color: var(--whiteFixed);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 152px;
        height: 48px;
        transition: 0.4ms;
    }

    @media (max-width: 395px) {
        top: 145px;
        padding: 20px;
    }
`

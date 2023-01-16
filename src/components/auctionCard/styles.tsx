import styled from "styled-components";

export const AuctionCardDiv = styled.div`
display: flex;
flex-direction: column;
height: 365px;
min-width: 735px;
color: var(--whiteFixed);


.timer__clock {
    color: var(--brand1);
}

.timer__tempo {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-right: 10px;
}

.rowDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.km__year__car span {
    background-color: var(--brand4);
    color: var(--brand1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3125rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
    line-height: 142%;
    font-weight: 500;
    border-radius: 0.3125rem;
  }
  .km__year__car {
    display: flex;
    gap: 0.625rem;
  }

  .user__data {
  }
  .user__data figure {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteFixed);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 14px;
    background-color: var(--brand1);
    margin-bottom: 0px;
  }
  .user__data p {
    font-weight: 500;
    font-size: 14px;
    margin-left: 10px;
  }

  .vehicle__important_info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .vehicle__value {
    font-weight: 600;
  }

`

interface Props {
    backgroundImage: any
}

export const BackgroundDivImage = styled.div<Props>`
height: 100%;
background-color: var(--grey4);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
background:url(${(props) => props.backgroundImage}) no-repeat;
background-size: contain;
background-position: center;

.overImage__div {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.vehicleInfo__div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
}

.vehicle__description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info__holder {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.timer__holder {
    margin-bottom: 20px;
    border: none;
}

`

export const AuctionCardButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 30px;
align-items: center;
min-width: 100%;
height: 42px;
background-color: var(--brand1);
color: var(--whiteFixed);

border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;

:hover {
    cursor: pointer;
}
`

export const AuctionTimer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 126px;
height: 36px;
border-radius: 32px;
background-color: var(--whiteFixed);
color: var(--grey0);
`

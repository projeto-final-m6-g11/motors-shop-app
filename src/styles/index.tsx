import styled, { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root{
    --gradient          : linear-gradient(90deg, #0B0D0D -1.61%, #4529E6 100.99%);
    --brand1            : #4529E6;
    --brand2            : #5126ea;
    --brand3            : #B0A6F0;
    --brand4            : #EDEAFD;
    --grey0             : #0B0D0D;
    --grey1             : #212529;
    --grey2             : #495057;
    --grey3             : #868E96;
    --grey4             : #ADB5BD;
    --grey5             : #CED4DA;
    --grey6             : #DEE2E6;
    --grey7             : #E9ECEF;
    --grey8             : #F1F3F5;
    --grey9             : #F8F9FA;
    --grey10            : #FDFDFD;
    --whiteFixed        : #FFFFFF;
    --alert1            : #CD2B31;
    --alert2            : #FDD8D8;
    --alert3            : #FFE5E5;
    --sucess1           : #18794E;          
    --sucess2           : #CCEBD7;      
    --sucess3           : #DDF3E4;     
    --random2           : #C04277;
    --random3           : #7D2A4D;
    --random4           : #7000FF;
    --random5           : #6200E3;
    --random6           : #36007D;
    --random7           : #349974;
    --random8           : #2A7D5F;
    --random9           : #153D2E;
    --random10          : #6100FF;
    --random11          : #5700E3;
    --random12          : #30007D;
    }

    html {
        scroll-behavior: smooth;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lexend', sans-serif;
    }

    *{
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
        
    }

    body,button,input,label{
        font-family     : 'inter';
        font-size       : 16px;
    }

    button {
        cursor          : pointer;
    }

    li,ul {
        list-style      : none;
    }

    a{
        text-decoration : none;
    }

    img{
        max-width       : 100%;
    }

    body{
        background: var(--whiteFixed);
        overflow-x: hidden;
        ::-webkit-scrollbar{
        display: none;
        }
    }
`

interface Props {
    height: string
}

export const DivSpace = styled.div<Props>`
    height: ${(props) => props.height};
`

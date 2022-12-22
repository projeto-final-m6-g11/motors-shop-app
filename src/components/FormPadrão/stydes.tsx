import styled from "styled-components"

export const FormPattern = styled.form`
   display              : flex;
   align-items          : flex-start;
   justify-content      : center;
   flex-direction       : column;
   max-width            : 350px;
   border-radius        : 8px;
   padding              : 20px;
   margin-top           : 50px;
   max-height           : 100vh;
   overflow-x           : scroll;
   background-color: var(--whiteFixed);

   
   
   @media (min-width: 810px) {
      max-width            : 520px;
      overflow-x           : hidden;
   }
  

`
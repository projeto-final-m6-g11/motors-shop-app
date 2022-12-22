import styled from "styled-components";

const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fbf8f2;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  .pageContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  }

  .space {
    display: flex;
    height: 400px;
  }
`;

export default MainDashboard;

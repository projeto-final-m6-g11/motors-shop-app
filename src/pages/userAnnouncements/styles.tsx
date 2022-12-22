import styled from "styled-components";

const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fbf8f2;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  .pageContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .space {
    display: flex;
    height: 350px;
  }
`;

export default MainDashboard;

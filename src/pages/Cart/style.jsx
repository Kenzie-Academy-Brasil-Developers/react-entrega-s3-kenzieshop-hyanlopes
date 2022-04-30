import styled from "styled-components";

export const ContainerCart = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d1d1ca;
  }
  header h1 {
    font-size: 20px;
  }
  .mainCart {
    width: 90%;
    max-width: 840px;
    /* background-color: white;
    padding: 30px;
    border-radius: 10px; */
    margin-top: 30px;
  }
  .sectionCart {
    max-width: 1000px;
  }
  .sectionCart div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .goHome {
    cursor: pointer;
  }
`;

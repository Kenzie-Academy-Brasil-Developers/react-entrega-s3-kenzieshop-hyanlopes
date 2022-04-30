import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f2;

  .headerHome {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d1d1ca;
  }
  .headerHome h1 {
    font-size: 20px;
  }
  .mainHome .sectionHome {
    display: flex;
    margin: 10px 5px;
    overflow-x: scroll;
  }
  .goCart {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    height: 120vh;
    .mainHome .sectionHome {
      flex-wrap: wrap;
      justify-content: center;
      overflow-x: hidden;
    }
  }
  @media (min-width: 1025px) {
    .mainHome {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mainHome .sectionHome {
      width: 65%;
    }
  }
`;

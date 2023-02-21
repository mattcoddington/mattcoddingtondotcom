import styled from "styled-components";

import MyIntro from "./MyIntro";

const Container = styled.section`
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/images/main-title-bg.svg"), #1e1345;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainTitle = () => (
  <Container>
    <MyIntro />
  </Container>
);

export default MainTitle;

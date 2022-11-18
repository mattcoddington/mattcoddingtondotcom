import styled from "styled-components";

import Header from "../Header";
import MyIntro from "./MyIntro";

const Container = styled.div`
  background: #fee9e8;
`;

const IntroContainer = styled.section`
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainTitle = () => (
  <Container>
    <Header />
    <IntroContainer>
      <MyIntro />
    </IntroContainer>
  </Container>
);

export default MainTitle;

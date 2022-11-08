import styled from "styled-components";

import Header from "../Header";

const Container = styled.section`
  background: #fee9e8;
  height: 100vh;
`;

const MainTitle = () => (
  <Container>
    <Header />
    Main Title!
  </Container>
);

export default MainTitle;

import styled from "styled-components";

import Link from "next/link";

import Button from "../Button";

const Container = styled.div`
  height: 350px;
  background: #7e6cb2;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Copy = styled.p`
  margin-bottom: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

const HireMe = () => (
  <Container>
    <InnerContainer>
      <Copy>I'm looking for a new gig, freelance or full time!</Copy>
      <Link href="/#contactForm">
        <Button text="Hire me, why don't ya" primary />
      </Link>
    </InnerContainer>
  </Container>
);

export default HireMe;

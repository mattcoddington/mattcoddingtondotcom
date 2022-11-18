import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #1c1525;

  > * {
    padding-right: 24px;
  }

  > :last-child {
    padding-right: 0px;
  }
`;

const Dot = styled.img``;

const Nav = () => (
  <Container>
    <div>work</div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>contact</div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>resume</div>
  </Container>
);

export default Nav;

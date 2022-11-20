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
  color: ${(props) => (props.sticky ? `#1C1525` : `#c7baed`)};

  > * {
    padding-right: 24px;
  }

  > :last-child {
    padding-right: 0px;
  }
`;

const Dot = styled.img``;

const Nav = ({ sticky }) => (
  <Container sticky={sticky}>
    <div>work</div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>contact</div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>resume</div>
  </Container>
);

export default Nav;

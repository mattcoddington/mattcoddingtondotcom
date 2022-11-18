import styled from "styled-components";

import Image from "next/image";

import Nav from "./Nav";

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.sticky
      ? `
    background: #fff;
    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0px;
  `
      : ``}
`;

const Contents = styled.div`
  width: 1432px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ sticky }) => (
  <Container sticky={sticky}>
    <Contents>
      <Image src="/images/mc.svg" alt="MC Logo" width={40} height={16} />
      <Nav />
    </Contents>
  </Container>
);

Header.defaultProps = {
  sticky: true,
};

export default Header;
